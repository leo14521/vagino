/**
 * 프로덕션 빌드(out/)를 실제 배포 구조와 동일하게 preview/ 로 조립한다.
 *   preview/sub/         ← out/*            (basePath '/sub' 로 빌드된 정적 결과)
 *   preview/<공용파일>    ← public/global-ui.js 등 (통합사이트 루트에 놓이는 공용 리소스)
 *
 * 이렇게 하면 `npx serve preview` 후 http://localhost:PORT/sub/menu3-1/ 로
 * 실제 배포와 100% 동일하게 미리보기할 수 있다.
 * (global-ui.js 의 모바일 드로어 링크, ?tab= 리다이렉트까지 그대로 동작)
 */
import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(process.cwd());
const OUT = path.join(ROOT, "out");
const PUBLIC = path.join(ROOT, "public");
const PREVIEW = path.join(ROOT, "preview");
const LANDING2 = path.join(PREVIEW, "sub");

const SHARED_FILES = [
  "global-ui.css",
  "seo-aeo.css",
  "consult-form.js",
  "seo-aeo.js",
  "global-ui.js",
];

if (!fs.existsSync(OUT)) {
  console.error("out/ 폴더가 없습니다. 먼저 `npm run build` 를 실행하세요.");
  process.exit(1);
}

fs.rmSync(PREVIEW, { recursive: true, force: true });
fs.mkdirSync(LANDING2, { recursive: true });

fs.cpSync(OUT, LANDING2, { recursive: true });

for (const file of SHARED_FILES) {
  const src = path.join(PUBLIC, file);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, path.join(PREVIEW, file));
  } else {
    console.warn(`경고: public/${file} 이(가) 없어 건너뜁니다.`);
  }
}

console.log("preview/ 조립 완료 → http://localhost:5000/sub/menu3-1/ 에서 확인하세요.");
