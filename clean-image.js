const fs = require('fs');
const path = require('path');

// 1. 탐색할 폴더 (public)
const directoryPath = path.join(__dirname, 'public');

// 2. 재귀 탐색 함수
function walkDir(dir, callback) {
    if (!fs.existsSync(dir)) return;
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
    });
}

console.log("🧹 원본 이미지 정리를 시작합니다...");

walkDir(directoryPath, (filePath) => {
    const ext = path.extname(filePath).toLowerCase();
    
    // jpg, png, jpeg 파일인 경우만 확인
    if (['.jpg', '.jpeg', '.png'].includes(ext)) {
        const dir = path.dirname(filePath);
        const name = path.basename(filePath, ext);
        const webpPath = path.join(dir, `${name}.webp`);

        // [중요] 변환된 .webp 파일이 '존재할 때만' 원본을 삭제함 (안전장치)
        if (fs.existsSync(webpPath)) {
            try {
                fs.unlinkSync(filePath); // 파일 삭제
                console.log(`🗑️ 원본 삭제 완료: ${name}${ext}`);
            } catch (err) {
                console.error(`❌ 삭제 실패: ${filePath}`, err);
            }
        } else {
            console.log(`⚠️ WebP가 없어서 원본 유지함: ${name}${ext}`);
        }
    }
});