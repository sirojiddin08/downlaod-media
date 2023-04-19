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

// const fileUrl = 'https://cdn.designerapp.osi.office.net/email/designer-teaser-video-50-mbps-fab6496a-8250-4a45-adf9-e265e6ae0ed8.mp4';
const fileUrl = 'https://mixdrop.co/f/mdwd8mq4hzdwx9';
const fileName = 'movie.mp4';

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

// const fileUrl = 'https://example.com/file.mp4';
// const uploadDir = './uploads/';
// const ext = fileUrl.split('.').pop();

// const req = https.get(fileUrl, function (response) {
//     const fileLength = parseInt(response.headers['content-length'], 10);
//     let downloadedLength = 0;
//     const file = fs.createWriteStream(uploadDir + Date.now() + '.' + ext);

//     response.on('data', function (chunk) {
//         downloadedLength += chunk.length;
//         const progress = ((downloadedLength / fileLength) * 100).toFixed(2);
//         process.stdout.write(`Downloading ${progress}%\r`);
//     });

//     response.pipe(file);
//     file.on('finish', function () {
//         file.close(console.log(`Downloaded ${file.path}`));
//     });
// });

// req.on('error', function (err) {
//     console.error(err);
// });


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


// const Twitter = require('twitter-api');

// const client = new Twitter({
//     appKey: 'your_app_key',
//     appSecret: 'your_app_secret',
//     accessToken: 'your_access_token',
//     accessTokenSecret: 'your_access_token_secret'
// });

// const tweetId = '1634539708503011328'; // the ID of the tweet containing the media file

// client.tweets.statusesLookup({ id: tweetId, include_entities: true })
//     .then((response) => {
//         const mediaUrl = response[0].entities.media[0].media_url_https;
//         const fileName = mediaUrl.split('/').pop();

//         const file = fs.createWriteStream(`uploads/${fileName}`);

//         https.get(mediaUrl, function (response) {
//             const totalBytes = parseInt(response.headers['content-length'], 10);
//             let downloadedBytes = 0;

//             response.on('data', function (chunk) {
//                 downloadedBytes += chunk.length;
//                 const percentage = ((downloadedBytes / totalBytes) * 100).toFixed(2);
//                 process.stdout.clearLine();
//                 process.stdout.cursorTo(0);
//                 process.stdout.write(`Downloaded ${percentage}%`);
//             });

//             response.pipe(file);

//             file.on('finish', function () {
//                 file.close(console.log(`\nDownloaded ${fileName}`));
//             });
//         });
//     })
//     .catch((error) => {
//         console.error(error);
//     });
