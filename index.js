const express = require('express');
const app = express();
const session = require('express-session');
const path = require('path');
const passport = require('passport');

require('./auth');

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

function isLoggedIn(req, res, next) {
    req.user ? next() : res.sendStatus(401);
}

app.get('/', (req, res) => {
    res.render('home');
});

app.use(session({
    secret: 'mysecret',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));
app.use(passport.initialize());
app.use(passport.session());
app.get('/auth/google',
  passport.authenticate('google', { scope:
      [ 'email', 'profile' ] }
));

app.get( '/auth/google/callback',
    passport.authenticate( 'google', {
        successRedirect: '/auth/protected',
        failureRedirect: '/auth/google/failure'
}));

app.get('/auth/google/failure',isLoggedIn, (req, res) => {
    res.send('Something went wrong!');
});

app.get('/auth/protected',isLoggedIn, (req, res) => {
    let name = req.user.displayName;
    res.render('solutions', { name });
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

app.get('/addSpot', (req, res) => {
    res.render('addSpot');
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