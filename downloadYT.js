const fs = require('fs');
const ytdl = require('ytdl-core');

exports.dlYT = (url) => {
    return new Promise(async (resolve, reject) => {
        try {
            let info = await ytdl.getInfo(url);
            const fileName = info.player_response.videoDetails.title;
            let video = await ytdl(url).pipe(await fs.createWriteStream(`D:/image/${fileName}.mp4`));
            if (video) {
                resolve(true)
            }
            resolve(false);
        } catch (e) {
            reject(e);
        }
    });

}

//D:/image/${fileName}
