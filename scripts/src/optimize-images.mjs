import sharp from "sharp";
import { promises as fs } from "fs";
import path from "path";

const ROOT = path.resolve(process.cwd());

const targets = [
  // public/ — served as-is
  { file: "artifacts/gaming-vds/public/hero-devices.png", maxW: 1600, type: "png" },
  { file: "artifacts/gaming-vds/public/server-tower.png", maxW: 1200, type: "png" },
  { file: "artifacts/gaming-vds/public/hero-bg.jpg", maxW: 1920, type: "jpg", quality: 78 },
  { file: "artifacts/gaming-vds/public/opengraph.jpg", maxW: 1200, type: "jpg", quality: 82 },
  { file: "artifacts/gaming-vds/public/logo.png", maxW: 600, type: "png" },
  { file: "artifacts/gaming-vds/public/logo-knight.png", maxW: 360, type: "png" },
  { file: "artifacts/gaming-vds/public/logo-metin2.png", maxW: 360, type: "png" },
  { file: "artifacts/gaming-vds/public/logo-silkroad.png", maxW: 360, type: "png" },
  { file: "artifacts/gaming-vds/public/game-knight.jpg", maxW: 900, type: "jpg", quality: 78 },
  { file: "artifacts/gaming-vds/public/game-metin2.jpg", maxW: 900, type: "jpg", quality: 78 },
  { file: "artifacts/gaming-vds/public/game-silkroad.jpg", maxW: 900, type: "jpg", quality: 78 },
  { file: "artifacts/gaming-vds/public/favicon.png", maxW: 192, type: "png" },

  // attached_assets/ — bundled by Vite
  { file: "attached_assets/9e6a6532-7b5e-42f5-b60d-a1cda41e9985_1779239866848.png", maxW: 1400, type: "png" },
  { file: "attached_assets/5a408312-b76b-45e1-be7e-2aec89fcd923_1779239395636.png", maxW: 320, type: "png" },
  { file: "attached_assets/7b8469b6-df83-4f1c-b810-dc83ddc454d8_1779239395635.png", maxW: 320, type: "png" },
  { file: "attached_assets/e6cd9de8-e895-4a90-91ad-75abe5dd304a_1779239395636.png", maxW: 320, type: "png" },
  { file: "attached_assets/69abcf92-8d75-4491-9e36-b69bf296a21b_1779239395636.png", maxW: 320, type: "png" },
  { file: "attached_assets/a434422c-7c23-417c-9865-f99a488b9897_1779239395636.png", maxW: 800, type: "png" },
  { file: "attached_assets/PayTR-Logo_1779239906252.png", maxW: 400, type: "png" },
];

function fmt(b) {
  if (b > 1024 * 1024) return (b / 1024 / 1024).toFixed(2) + " MB";
  return (b / 1024).toFixed(1) + " KB";
}

let totalBefore = 0;
let totalAfter = 0;

for (const t of targets) {
  const full = path.join(ROOT, t.file);
  let stat;
  try {
    stat = await fs.stat(full);
  } catch {
    console.log(`SKIP (missing): ${t.file}`);
    continue;
  }
  const before = stat.size;
  const img = sharp(full, { failOn: "none" });
  const meta = await img.metadata();
  const targetW = Math.min(meta.width || t.maxW, t.maxW);

  let pipeline = sharp(full).resize({
    width: targetW,
    withoutEnlargement: true,
    fit: "inside",
  });

  if (t.type === "png") {
    pipeline = pipeline.png({
      compressionLevel: 9,
      palette: true,
      quality: 85,
      effort: 10,
    });
  } else {
    pipeline = pipeline.jpeg({
      quality: t.quality ?? 80,
      progressive: true,
      mozjpeg: true,
    });
  }

  const buf = await pipeline.toBuffer();
  // Only write if smaller
  if (buf.length < before) {
    await fs.writeFile(full, buf);
    totalBefore += before;
    totalAfter += buf.length;
    console.log(
      `${t.file}: ${fmt(before)} -> ${fmt(buf.length)} (-${Math.round(
        (1 - buf.length / before) * 100,
      )}%)`,
    );
  } else {
    totalBefore += before;
    totalAfter += before;
    console.log(`${t.file}: kept (${fmt(before)}, optimization didn't help)`);
  }
}

console.log(
  `\nTOTAL: ${fmt(totalBefore)} -> ${fmt(totalAfter)} (saved ${fmt(
    totalBefore - totalAfter,
  )}, -${Math.round((1 - totalAfter / totalBefore) * 100)}%)`,
);
