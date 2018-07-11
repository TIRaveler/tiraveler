const express = require('express');
const session = require('client-sessions');
const bodyParser = require('body-parser');
const path = require('path');
const routes = require('./routes');

const clientFolder = path.join(__dirname, '../client/dist');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  cookieName: 'session',
  secret: 'keyboard cat',
  duration: 30 * 60 * 100000,
  activeDuration: 5 * 60 * 100000,
  httpOnly: true,
  secure: true,
  ephemeral: true,
}));

app.use('/', express.static(clientFolder));
app.use('/', routes);
// Last endpoint, wild card
const reactRouterRoutes = ['/', '/search', '/time', '/photos', '/events',
  '/review', '/finalized', '/myItineraries', '/signup'];
reactRouterRoutes.forEach((route) => {
  app.use(route, express.static(`${clientFolder}/index.html`));
});

module.exports = app;
