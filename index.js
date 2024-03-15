const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/solution1', (req, res) => {
    res.render('solution1');
});

app.get('/solution2', (req, res) => {
    res.render('solution2');
});

app.get('/findSpot', (req, res) => {
    res.render('findSpot');
});

app.get('/bookSpot', (req, res) => {
    res.render('bookSpot');
});

app.get('/solution3', (req, res) => {
    res.render('solution3', {rand: num});
});

app.get('/aboutUs', (req, res) => {
    res.render('aboutUs');
});

app.get('/contactUs', (req, res) => {
    res.render('contactUs');
});

app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000");
});