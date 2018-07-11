require('dotenv').config();

const port = process.env.PORT || 8000;
// const passport = require('./authentication');
const app = require('./server');

// app.use(passport.initialize());
// app.use(passport.session());

// app.get('/login/twitter', passport.authenticate('twitter'));
// app.get('/auth/twitter/callback', passport.authenticate('twitter', { failureRedirect: '/' }),
//   (req, res) => {
//     console.log('res.req.sessionID after callback: ', res.req.sessionID);
//     res.redirect('/search');
//   });

app.listen(port, () => console.log(`server running on port ${port}`));
