const routes = require('./routes');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const clientFolder = path.join(__dirname, '../client/dist');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(require('express-session')({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true,
  cookie: { secure: 'auto' },
}));

app.use('/', express.static(clientFolder));
app.use('/', routes);
// Last endpoint, wild card
const reactRouterRoutes = ["/", "/search", "/time", "/photos", "/events",
"/review", "/finalized", "/myItineraries"];
reactRouterRoutes.forEach((route) => {
  app.use(route, express.static(`${clientFolder}/index.html`));
});

module.exports = app;