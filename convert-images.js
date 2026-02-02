// convert-images.js
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// 1. 이미지가 들어있는 폴더 경로 (public 폴더)
const directoryPath = path.join(__dirname, 'public');

// 2. 폴더를 재귀적으로 탐색하는 함수
function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
    });
}

// 3. 변환 실행
console.log("🔄 이미지 변환을 시작합니다...");

walkDir(directoryPath, (filePath) => {
    const ext = path.extname(filePath).toLowerCase();
    
    // jpg, png, jpeg 파일만 찾음
    if (['.jpg', '.jpeg', '.png'].includes(ext)) {
        const dir = path.dirname(filePath);
        const name = path.basename(filePath, ext);
        const outputFilePath = path.join(dir, `${name}.webp`);

        // 이미 webp가 있으면 건너뜀
        if (!fs.existsSync(outputFilePath)) {
            sharp(filePath)
                .webp({ quality: 80 }) // 퀄리티 80% (용량 대폭 감소)
                .toFile(outputFilePath)
                .then(() => console.log(`✅ 변환 완료: ${name}.webp`))
                .catch(err => console.error(`❌ 에러 발생: ${filePath}`, err));
        }
    }
});