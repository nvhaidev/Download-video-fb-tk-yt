# Download-video-fb-tk-yt
Download video Facebook TikTok Youtube


```sh

git clone https://github.com/nvhaidev/Download-video-fb-tk-yt

cd Download-video-fb-tk-yt

npm install

npm start
 
Download video TikTok

http://localhost:5000/tk?url=

http://localhost:5000/tk?url=https://www.tiktok.com/@dngbhan/video/7018898864203762945

Download video Facebook

http://localhost:5000/fb?url=

http://localhost:5000/fb?url=https://www.facebook.com/Theanh28/videos/193096602659821

Download video Youtube

http://localhost:5000/yt?url=

http://localhost:5000/yt?url=https://www.youtube.com/watch?v=mEBZ3IlF1TU

```

Note 

Vi tri luu
Nơi lưu video Facebook khi tải xong của downloadfb ở dòng số 8  let loiluu='D:/image';

Nơi lưu video TikTok khi tải xong của downloadTK ở dòng số 15   downloadPath: path.resolve(__dirname, 'D:/image/')

Nơi lưu video Youtube khi tải xong của downloadYT ở dòng số 9    

let video = await ytdl(url).pipe(await fs.createWriteStream(`D:/image/${fileName}.mp4`));

Contact

Facebook: https://www.facebook.com/nvhaid

Youtube: https://www.youtube.com/channel/UC-txP8sy4HObzGtxu_x1V6g

Blog: https://nvhaidev.blogspot.com/
