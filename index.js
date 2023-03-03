// const https = require('https');
// const fs = require('fs');

// const fileUrl = 'https://cdn.designerapp.osi.office.net/email/designer-teaser-video-50-mbps-fab6496a-8250-4a45-adf9-e265e6ae0ed8.mp4';
// const fileName = 'video.mp4';

// const file = fs.createWriteStream(fileName);

// https.get(fileUrl, function (response) {
//     response.pipe(file);
//     file.on('finish', function () {
//         file.close(console.log(`Downloaded ${fileName}`));
//     });
// });



const https = require('https');
const fs = require('fs');

const fileUrl = 'https://media.discordapp.net/attachments/1060751573002768464/1081208773877706812/f7d5da50-7e74-4cfd-ada4-0f313f43c4b8.jpg?width=350&height=350';
const fileName = '0f313f43c4b8.jpg';

const file = fs.createWriteStream(`uploads/${fileName}`);

https.get(fileUrl, function (response) {
    const totalBytes = parseInt(response.headers['content-length'], 10);
    let downloadedBytes = 0;

    response.on('data', function (chunk) {
        downloadedBytes += chunk.length;
        const percentage = ((downloadedBytes / totalBytes) * 100).toFixed(2);
        process.stdout.clearLine();
        process.stdout.cursorTo(0);
        process.stdout.write(`Downloaded ${percentage}%`);
    });

    response.pipe(file);

    file.on('finish', function () {
        file.close(console.log(`\nDownloaded ${fileName}`));
    });
});



// const ytdl = require('ytdl-core');
// const fs = require('fs');

// const videoUrl = 'https://youtube.com/shorts/HMjPZlQAE0E?feature=share';
// const fileName = 'rickroll.mp4';
// const quality = 'highest';

// const video = ytdl(videoUrl, { quality });

// video.pipe(fs.createWriteStream(fileName));

// video.on('progress', (chunkLength, downloaded, total) => {
//     const percentage = ((downloaded / total) * 100).toFixed(2);
//     process.stdout.clearLine();
//     process.stdout.cursorTo(0);
//     process.stdout.write(`Downloaded ${percentage}%`);
// });

// video.on('end', () => {
//     console.log(`\nDownloaded ${fileName}`);
// });

