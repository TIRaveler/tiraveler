require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const Strategy = require('passport-twitter').Strategy;
const path = require('path');
const routes = require('./routes');
const config = require('../config.js');

passport.use(new Strategy({
  consumerKey: config.APIs.TWITTER_API,
  consumerSecret: config.APIs.TWITTER_SECRET,
  callbackURL: 'http://127.0.0.1:8000/auth/twitter/callback',
}, (token, tokenSecret, profile, done) => done(null, profile)));

passport.serializeUser((user, done) => {
  // console.log('serialize user in server: ', user)
  done(null, user);
});

passport.deserializeUser((obj, done) => {
  // console.log('deserialize obj in server: ', obj)
  done(null, obj);
});

const app = express();
const port = process.env.PORT || 8000;
const clientFolder = path.join(__dirname, '../client/dist');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(require('express-session')({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true,
  cookie: { secure: 'auto' },
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/', express.static(clientFolder));
app.get('/login/twitter', passport.authenticate('twitter'));
app.get('/auth/twitter/callback', passport.authenticate('twitter', { failureRedirect: '/' }),
  (req, res) => {
    console.log('res.req.sessionID after callback: ', res.req.sessionID);
    res.redirect('/search');
  });

app.use('/', routes);
// Last endpoint, wild card
app.use('/*', express.static(`${clientFolder}/index.html`));

const server = app.listen(port, () => console.log(`server running on port ${port}`));

module.exports.server = server;
module.exports.app = app;
