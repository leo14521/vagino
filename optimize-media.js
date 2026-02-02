const ffmpeg = require('fluent-ffmpeg');
const ffmpegPath = require('ffmpeg-static');
const fs = require('fs');
const path = require('path');

// FFmpeg 경로 설정
ffmpeg.setFfmpegPath(ffmpegPath);

// 탐색할 폴더
const directoryPath = path.join(__dirname, 'public');

function walkDir(dir, callback) {
    if (!fs.existsSync(dir)) return;
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
    });
}

console.log("🎥 미디어 파일 최적화를 시작합니다...");

walkDir(directoryPath, (filePath) => {
    const ext = path.extname(filePath).toLowerCase();
    const dir = path.dirname(filePath);
    const name = path.basename(filePath, ext);

    // 1. GIF -> WebM 변환 (획기적인 용량 절감)
    if (ext === '.gif') {
        const outputPath = path.join(dir, `${name}.webm`);
        
        if (!fs.existsSync(outputPath)) {
            console.log(`⏳ 변환 중 (GIF -> WebM): ${name}${ext}`);
            ffmpeg(filePath)
                .outputOptions([
                    '-c:v libvpx-vp9', // VP9 코덱 사용
                    '-b:v 0',          // 비트레이트 제한 해제 (CRF 사용)
                    '-crf 30'          // 화질/용량 균형값 (낮을수록 고화질, 30 추천)
                ])
                .save(outputPath)
                .on('end', () => console.log(`✅ 완료: ${name}.webm`))
                .on('error', (err) => console.error(`❌ 에러: ${name}${ext}`, err));
        }
    }

    // 2. MP4 -> 압축된 MP4 (접미사 _opt 추가)
    if (ext === '.mp4' && !name.endsWith('_opt')) {
        const outputPath = path.join(dir, `${name}_opt.mp4`);
        
        if (!fs.existsSync(outputPath)) {
            console.log(`⏳ 압축 중 (MP4): ${name}${ext}`);
            ffmpeg(filePath)
                .outputOptions([
                    '-vcodec libx264',
                    '-crf 28' // 압축률 (23:기본, 28:용량절약형)
                ])
                .save(outputPath)
                .on('end', () => {
                    console.log(`✅ 완료: ${name}_opt.mp4`);
                    // 원본을 덮어쓰고 싶으면 아래 주석 해제 (위험할 수 있음)
                    // fs.unlinkSync(filePath); 
                    // fs.renameSync(outputPath, filePath);
                })
                .on('error', (err) => console.error(`❌ 에러: ${name}${ext}`, err));
        }
    }
});