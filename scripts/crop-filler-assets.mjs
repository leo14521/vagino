import sharp from "sharp";
import { mkdir } from "fs/promises";
import path from "path";

const SRC = "public/images/filler";
const OUT = "public/images/filler";

const src = (name) => path.join(SRC, name);
const out = (name) => path.join(OUT, name);

/** @type {Record<string, { width: number; height: number }>} */
const manifest = {};

async function toWebp(input, output, extract, resizeWidth = 900, trim = false) {
  let img = sharp(input);
  if (extract) img = img.extract(extract);
  else if (trim) img = img.trim({ threshold: 12 });
  await img.resize({ width: resizeWidth, withoutEnlargement: false }).webp({ quality: 92 }).toFile(output);
  const meta = await sharp(output).metadata();
  manifest[path.basename(output)] = { width: meta.width ?? resizeWidth, height: meta.height ?? 0 };
}

async function splitHalves(input, outLeft, outRight, opts = {}) {
  const { topRatio = 0, heightRatio = 1, insetX = 0 } = opts;
  const meta = await sharp(input).metadata();
  const W = meta.width;
  const H = meta.height;
  const top = Math.round(H * topRatio);
  const height = Math.round(H * heightRatio);
  const inset = Math.round(W * insetX);
  const half = Math.floor((W - inset * 2) / 2);

  await toWebp(input, outLeft, { left: inset, top, width: half, height }, 520);
  await toWebp(
    input,
    outRight,
    { left: inset + half, top, width: W - inset - half - inset, height },
    520
  );
}

await mkdir(OUT, { recursive: true });

// 제품
await toWebp(src("원더필 제품이미지.png"), out("product-box.webp"), null, 960);

// 주입 단면
await splitHalves(src("원더필 주입이미지.png"), out("injection-before.webp"), out("injection-after.webp"), {
  heightRatio: 0.86,
  insetX: 0.01,
});

await splitHalves(src("원더필 주입이미지2.png"), out("injection2-before.webp"), out("injection2-after.webp"), {
  topRatio: 0.4,
  heightRatio: 0.46,
  insetX: 0.02,
});

// 주입효과 1·2 — 전체 비교 이미지 (분할 X)
await toWebp(src("원더필 주입효과1.png"), out("effect-tissue-compare.webp"), null, 1100, true);
await toWebp(src("원더필 주입효과2.png"), out("effect-collagen-compare.webp"), null, 1100, true);

console.log(JSON.stringify(manifest, null, 2));
