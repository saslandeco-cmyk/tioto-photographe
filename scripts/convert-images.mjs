// Convertit en AVIF toutes les images de public/images (récursivement).
//
// Usage :
//   npm run images:convert            convertit et range les originaux dans ./originals
//   npm run images:convert -- --keep  convertit et laisse les originaux en place
//
// Le script est idempotent : une image déjà convertie (même nom en .avif) est ignorée.

import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { toAvif, INPUT_EXTENSIONS } from "../lib/avif.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const imagesDir = path.join(root, "public", "images");
const originalsDir = path.join(root, "originals");
const keep = process.argv.includes("--keep");

async function* walk(dir) {
  for (const entry of await fs.readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else yield full;
  }
}

const kb = (n) => `${(n / 1024).toFixed(0)} Ko`;

let converted = 0;
let skipped = 0;
let before = 0;
let after = 0;

for await (const file of walk(imagesDir)) {
  const ext = path.extname(file).toLowerCase();
  if (!INPUT_EXTENSIONS.includes(ext)) continue;

  const target = file.slice(0, -ext.length) + ".avif";
  const rel = path.relative(imagesDir, file);

  try {
    await fs.access(target);
    console.log(`= ${rel} (déjà converti)`);
    skipped++;
    continue;
  } catch {
    // pas encore converti : on continue
  }

  const source = await fs.readFile(file);
  const output = await toAvif(source);
  await fs.writeFile(target, output);

  before += source.length;
  after += output.length;
  converted++;
  console.log(
    `✓ ${rel} → ${path.basename(target)}  ${kb(source.length)} → ${kb(output.length)}`
  );

  if (!keep) {
    const backup = path.join(originalsDir, rel);
    await fs.mkdir(path.dirname(backup), { recursive: true });
    await fs.rename(file, backup);
  }
}

console.log(
  `\n${converted} image(s) convertie(s), ${skipped} ignorée(s).` +
    (converted
      ? ` Poids : ${kb(before)} → ${kb(after)} (−${Math.round((1 - after / before) * 100)} %).`
      : "")
);
if (converted && !keep) console.log("Originaux déplacés dans ./originals (hors du site public).");
