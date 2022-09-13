
const { render } = require('ejs');
const express = require('express');
const mongoose = require('mongoose');
const ShortUrl = require('./models/url');

//setup mongodb
mongoose.connect('mongodb://127.0.0.1:27017/urlShort', {
    useNewUrlParser: true, useUnifiedTopology: true
})

//object
const app = express();


//port
require('dotenv').config();
const port = process.env.port || 8000
//views ejs
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
//render page
app.get('/', async (req, res) => {
    const shortUrls = await ShortUrl.find()
    res.render('index', { shortUrls });
})
app.post('/short', async (req, res) => {
    await ShortUrl.create({ full: req.body.fullUrl })
    res.redirect('/')
})
app.get('/:shortUrl', async (req, res) => {
    const shturl = await ShortUrl.findOne({ short: req.params.shortUrl })

    if (shturl == null) return res.sendStatus(404);
    shturl.clicks++
    shturl.save()
    res.redirect(shturl.full);
})
//run server
app.listen(port, console.log(`running on ${port}`))



