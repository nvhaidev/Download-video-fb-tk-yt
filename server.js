const express = require('express');
const app = express()


const {dlFB} = require('./downloadfb');
const {dlTK} = require('./downloadTK');
const {dlYT} = require('./downloadYT');

app.get('/fb', async function (req, res) {
    let result = await dlFB(req.query.url);
    if (result) {
        res.send('Done')
    }
});
app.get('/tk', async function (req, res) {
    let result = await dlTK(req.query.url);
    if (result) {
        res.send('Done')
    }
})
app.get('/yt', async function (req, res) {
    let result = await dlYT(req.query.url);
    if (result) {
        res.send('Done')
    }
})

app.listen(5000)
