const puppeteer = require('puppeteer');
const path = require('path');

exports.dlTK = (url) => {
    return new Promise(async (resolve, reject) => {
        const browser = await puppeteer.launch({
            headless: true,
            args: [
                '--no-sandbox'
            ],
        });
        const page = await browser.newPage();
        await page.client().send("Page.setDownloadBehavior", {
            behavior: "allow",
            downloadPath: path.resolve(__dirname, 'D:/image/')
        })
        await page.goto(url);

        await page.waitForTimeout(3500);

        await page.evaluate(() => {
            (function () {
                let idVideo = window.location.href.split('/')[5].split('?')[0];
                let video = document.getElementsByTagName("video");
                let dodai = video.length;
                let a = video[dodai - 1].src;
                fetch(a).then((resp) => resp.blob()).then((blob) => {
                    const url = window.URL.createObjectURL(blob);
                    const b = document.createElement("a");
                    b.style.display = "none";
                    b.href = url;
                    b.setAttribute("download", `${idVideo}.mp4`);
                    b.download = `${idVideo}.mp4`;
                    document.body.appendChild(b);
                    b.click();
                    window.URL.revokeObjectURL(url);
                });
            })()
        });
        console.log("Done");
        await page.waitForTimeout(3500);
        await browser.close();
        resolve(true)
    })

}



