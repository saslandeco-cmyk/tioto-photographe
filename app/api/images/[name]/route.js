import { promises as fs } from "node:fs";
import path from "node:path";

export const runtime = "nodejs";

const UPLOAD_DIR = path.join(process.cwd(), "uploads");

// GET /api/images/<nom>.avif — sert les images uploadées via /api/upload.
export async function GET(_request, { params }) {
  const { name } = await params;

  // Liste blanche stricte : empêche toute remontée de répertoire.
  if (!/^[a-z0-9-]+\.avif$/.test(name)) {
    return new Response("Not found", { status: 404 });
  }

  try {
    const data = await fs.readFile(path.join(UPLOAD_DIR, name));
    return new Response(data, {
      headers: {
        "Content-Type": "image/avif",
        // Le nom contient le hash du contenu : le fichier ne change jamais.
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch {
    return new Response("Not found", { status: 404 });
  }
}
