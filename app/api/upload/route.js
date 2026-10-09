import { promises as fs } from "node:fs";
import path from "node:path";
import { createHash, timingSafeEqual } from "node:crypto";
import { toAvif } from "@/lib/avif.mjs";

export const runtime = "nodejs";

const UPLOAD_DIR = path.join(process.cwd(), "uploads");
const MAX_BYTES = 15 * 1024 * 1024; // 15 Mo avant conversion
const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp", "image/tiff"];

function json(body, status = 200) {
  return Response.json(body, { status });
}

// Protège l'endpoint : en production, UPLOAD_TOKEN est obligatoire.
// En développement, l'upload reste libre tant qu'aucun token n'est défini.
function authorize(request) {
  const expected = process.env.UPLOAD_TOKEN;
  if (!expected) {
    return process.env.NODE_ENV === "production"
      ? { ok: false, status: 503, error: "UPLOAD_TOKEN non configuré sur le serveur." }
      : { ok: true };
  }
  const header = request.headers.get("authorization") ?? "";
  const given = header.startsWith("Bearer ") ? header.slice(7) : "";
  const a = createHash("sha256").update(given).digest();
  const b = createHash("sha256").update(expected).digest();
  return timingSafeEqual(a, b)
    ? { ok: true }
    : { ok: false, status: 401, error: "Token invalide." };
}

function slugify(name) {
  const base = name.replace(/\.[^.]+$/, "");
  const slug = base
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60);
  return slug || "image";
}

// POST /api/upload — champ multipart "file" (ou plusieurs champs "file")
export async function POST(request) {
  const auth = authorize(request);
  if (!auth.ok) return json({ error: auth.error }, auth.status);

  let form;
  try {
    form = await request.formData();
  } catch {
    return json({ error: "Requête multipart/form-data attendue." }, 400);
  }

  const files = form.getAll("file").filter((f) => typeof f !== "string");
  if (files.length === 0) {
    return json({ error: 'Aucun fichier reçu (champ "file").' }, 400);
  }

  await fs.mkdir(UPLOAD_DIR, { recursive: true });

  const results = [];
  for (const file of files) {
    if (!ALLOWED_TYPES.includes(file.type)) {
      results.push({ name: file.name, error: `Format non supporté (${file.type || "inconnu"}).` });
      continue;
    }
    if (file.size > MAX_BYTES) {
      results.push({ name: file.name, error: "Fichier trop volumineux (15 Mo max)." });
      continue;
    }

    try {
      const input = Buffer.from(await file.arrayBuffer());
      const output = await toAvif(input);
      // Le hash du contenu rend le nom unique et permet un cache immuable.
      const hash = createHash("sha1").update(output).digest("hex").slice(0, 8);
      const filename = `${slugify(file.name)}-${hash}.avif`;
      await fs.writeFile(path.join(UPLOAD_DIR, filename), output);

      results.push({
        name: file.name,
        url: `/api/images/${filename}`,
        bytesBefore: file.size,
        bytesAfter: output.length,
      });
    } catch {
      results.push({ name: file.name, error: "Image illisible ou corrompue." });
    }
  }

  const allFailed = results.every((r) => r.error);
  return json({ files: results }, allFailed ? 422 : 201);
}
