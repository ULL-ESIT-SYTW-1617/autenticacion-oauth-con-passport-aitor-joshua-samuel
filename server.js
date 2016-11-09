var express = require('express');
var passport = require('passport');
var Strategy = require('passport-github').Strategy;

passport.use(new Strategy({
        clientID: "676a763159b83edb09b9",
        clientSecret: "9698a41ff1224a91c72edca35f48b9855ee8190d",
        callbackURL: 'http://localhost:3000/login/github/return'
    },
    function(accessToken, refreshToken, profile, cb) {
        return cb(null, profile);
    }));

passport.serializeUser(function(user, cb) {
    cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
    cb(null, obj);
});


var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/gh-pages'));
app.use(require('morgan')('combined'));
app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({
    extended: true
}));
app.use(require('express-session')({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

app.get('/libro', function(req, res) {
  res.sendFile(__dirname + '/gh-pages/readme.html');
});

app.get('/', function(req, res) {
    res.render('home', {
        user: req.user
    });
});

app.get('/login', function(req, res) {
    res.render('login');
});

app.get('/login/github', passport.authenticate('github'));

app.get('/login/github/return', passport.authenticate('github', {
    failureRedirect: '/login'
}), function(req, res) {
    res.redirect('/');
});

app.get('/profile', require('connect-ensure-login').ensureLoggedIn(), function(req, res) {
    res.render('profile', {
        user: req.user
    });
});

app.listen(3000);
