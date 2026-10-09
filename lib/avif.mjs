import sharp from "sharp";

// Réglages AVIF partagés par le script de conversion et la route d'upload.
export const AVIF_OPTIONS = {
  quality: 55, // 50-60 : bon compromis poids / fidélité pour de la photo
  effort: 4, // 0 (rapide) à 9 (lent, plus compact)
};

// Largeur maximale conservée (les écrans les plus larges n'ont pas besoin de plus).
export const MAX_WIDTH = 2560;

// Formats d'entrée acceptés.
export const INPUT_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp", ".tif", ".tiff"];

/**
 * Convertit un buffer image en AVIF.
 * - applique l'orientation EXIF puis retire les métadonnées (poids + vie privée)
 * - réduit au besoin à MAX_WIDTH sans jamais agrandir
 */
export async function toAvif(input) {
  return sharp(input)
    .rotate()
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .avif(AVIF_OPTIONS)
    .toBuffer();
}
