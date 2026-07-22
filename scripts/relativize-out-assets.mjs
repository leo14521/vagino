import fs from "node:fs";
import path from "node:path";

/**
 * output: export 산출물 후처리.
 * 단독 배포(basePath 없음)에서는 /sub 접두사를 붙이지 않는다.
 * 통합 /sub 배포가 필요할 때만 BASE_PATH를 "/sub"로 켠다.
 */
const OUT_DIR = path.resolve("out");
const BASE_PATH = "";

const PUBLIC_PREFIXES = ["/images/", "/videos/", "/favicon", "/icon"];

function prefixPublicAssets(content) {
  if (!BASE_PATH) return content;

  let next = content;
  for (const prefix of PUBLIC_PREFIXES) {
    const prefixed = `${BASE_PATH}${prefix}`;
    next = next.replaceAll(`"${prefix}`, `"${prefixed}`);
    next = next.replaceAll(`'${prefix}`, `'${prefixed}`);
    next = next.replaceAll(`(${prefix}`, `(${prefixed}`);
  }
  return next;
}

function walk(dir) {
  for (const name of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, name.name);
    if (name.isDirectory()) {
      walk(fullPath);
      continue;
    }

    if (!/\.(?:html|js|css)$/.test(name.name)) continue;

    const original = fs.readFileSync(fullPath, "utf8");
    const updated = prefixPublicAssets(original);
    if (updated !== original) {
      fs.writeFileSync(fullPath, updated);
    }
  }
}

if (!fs.existsSync(OUT_DIR)) {
  console.error("out/ 없음 — next build 이후 실행하세요.");
  process.exit(1);
}

if (!BASE_PATH) {
  console.log("relativize-out-assets: basePath 없음 — skip");
  process.exit(0);
}

walk(OUT_DIR);
console.log(`relativize-out-assets: ${BASE_PATH} 접두사 적용 완료`);
