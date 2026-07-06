import sharp from "sharp";
import { mkdir } from "fs/promises";
import path from "path";

const SRC =
  "C:/Users/owner/.cursor/projects/c-Users-owner-vagino2-trinity-web/assets/c__Users_owner_AppData_Roaming_Cursor_User_workspaceStorage_4ed6045adb7dc8362fc75a0f275a2f60_images______-__________-3ea7f30d-cdee-4884-b7d2-8994903972c5.png";
const OUT = "public/images/filler";

/** 세로 롱 이미지(60×1024) 구간별 크롭 — 비율은 시각 검수 후 조정 */
const SLICES = [
  { name: "hero", top: 0, height: 0.095 },
  { name: "product", top: 0.095, height: 0.085 },
  { name: "mechanism", top: 0.18, height: 0.1 },
  { name: "benefits", top: 0.28, height: 0.115 },
  { name: "histology", top: 0.395, height: 0.1 },
  { name: "anatomy-lateral", top: 0.495, height: 0.115 },
  { name: "anatomy-cross", top: 0.61, height: 0.09 },
  { name: "trust", top: 0.7, height: 0.085 },
  { name: "pricing", top: 0.785, height: 0.09 },
  { name: "doctors", top: 0.875, height: 0.125 },
];

const meta = await sharp(SRC).metadata();
const W = meta.width;
const H = meta.height;

await mkdir(OUT, { recursive: true });

for (const slice of SLICES) {
  const top = Math.round(H * slice.top);
  const height = Math.min(Math.round(H * slice.height), H - top);
  const outPath = path.join(OUT, `${slice.name}.webp`);
  await sharp(SRC)
    .extract({ left: 0, top, width: W, height })
    .resize({ width: 720, withoutEnlargement: false })
    .webp({ quality: 88 })
    .toFile(outPath);
  console.log(outPath, `${W}x${height} → 720w`);
}
