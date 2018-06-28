const router = require('express').Router();
const userCtrl = require('./controllers/userControllers');
const photoCtrl = require('./controllers/photoControllers');
const eventCtrl = require('./controllers/eventControllers');
const dbCtrl = require('./controllers/dbControllers');


router.route('/user/login')
  .post(userCtrl.login);

router.route('/user/logout')
  .post(userCtrl.logout);

router.route('/user/register')
  .post(userCtrl.register);

router.route('/photos/search')
  .post(photoCtrl.search);

router.route('/events/search')
  .post(eventCtrl.search);

router.route('/itinerary/save')
  .post(dbCtrl.save);

module.exports = router;
