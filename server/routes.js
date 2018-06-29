const router = require('express').Router();
const userCtrl = require('./controllers/userControllers');
const photoCtrl = require('./controllers/photoControllers');
const eventCtrl = require('./controllers/eventControllers');
const dbCtrl = require('./controllers/dbControllers');

/**
 * User login page
 * @param {string} username - The username
 * @param {string} password - The user's password
 */
router.route('/user/login')
  .post(userCtrl.login);

/**
 * Logout user
 */
router.route('/user/logout')
  .post(userCtrl.logout);

/**
 * Register user
 * @param {string} username - The username
 * @param {string} password - The user's password
 */
router.route('/user/register')
  .post(userCtrl.register);

/**
 * Search photos
 * @returns {array}
 */
router.route('/photos/search')
  .post(photoCtrl.search);

/**
 * Search events
 * @param {string} location - Desired location
 * @param {array} pictures - Selected picture information to search with
 */
router.route('/events/search')
  .post(eventCtrl.search);

/**
 * Save user itinerary
 */
router.route('/itinerary/save')
  .post(dbCtrl.save);

module.exports = router;
