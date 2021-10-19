const axios = require('axios');
const https = require('https'); // or 'https' for https:// URLs
const fs = require('fs');

exports.dlFB = (url) => {
    return new Promise(async (resolve, reject) => {
        try {
            let loiluu='D:/image';
            let watch = url.includes('watch');
            if (watch) {
                let idVideo = url.split('watch?v=')[1];
                let res = await axios.get(url);

                const hd = res.data.includes('hd_src:null');

                if (!hd) {
                    let link = res.data.split('hd_src:"')[1].split('",')[0];
                    const file = fs.createWriteStream(`${loiluu}/${idVideo}.mp4`);
                    await https.get(link, function (response) {
                        response.pipe(file);
                    });
                    resolve(true)
                } else {
                    let link = res.data.split(',sd_src:"')[1].split('",')[0];
                    const file = fs.createWriteStream(`${loiluu}/${idVideo}.mp4`);
                    await https.get(link, function (response) {
                        response.pipe(file);
                    });
                    resolve(true)
                }
                resolve(false)
            } else {

                const myRegexp = /(?:(?:http|https):\/\/(?:www|m|mbasic|business)\.(?:facebook|fb)\.com\/)(?:photo(?:\.php|s)|permalink\.php|video\.php|media|watch\/|questions|notes|[^\/]+\/(?:activity|posts|videos|photos))[\/?](?:fbid=|story_fbid=|id=|b=|v=|)([0-9]+|[^\/]+\/[\d]+)/gm;

                const idVideo = myRegexp.exec(url);

                const res = await axios.get(url);

                let hd = res.data.includes('hd_src:null');
                if (!hd) {
                    let link = res.data.split('hd_src:"')[1].split('",')[0];
                    const file = fs.createWriteStream(`${loiluu}/${idVideo[1]}.mp4`);
                    await https.get(link, function (response) {
                        response.pipe(file);
                    });
                    resolve(true)
                } else {
                    let link = res.data.split(',sd_src:"')[1].split('",')[0];
                    const file = fs.createWriteStream(`${loiluu}/${idVideo[1]}.mp4`);
                    await https.get(link, function (response) {
                        response.pipe(file);
                    });
                    resolve(true)
                }
                resolve(false)
            }
            resolve(false)
        } catch (e) {
            resolve(false)
        }
    })

}
// let downloadVideo = async function (link, fileName) {
//     const file = fs.createWriteStream(`D:/image/${fileName}`);
//     const request = await https.get(link, function (response) {
//         response.pipe(file);
//     });
// }






