const router = require('express').Router();

/**
 * User login page
 * @param {string} username - The username
 * @param {string} password - The user's password
 */
router.route('/user/login')
  .post((req, res) => res.send('Success'));

/**
 * Logout user
 */
router.route('/user/logout')
  .post((req, res) => res.send('Success'));

/**
 * Register user
 * @param {string} username - The username
 * @param {string} password - The user's password
 */
router.route('/user/register')
  .post((req, res) => res.send('Success'));

/**
 * Search photos
 * @returns {array}
 */
router.route('/photos/search')
  .post((req, res) => res.send([]));

/**
 * Search events
 * @param {string} location - Desired location
 * @param {array} pictures - Selected picture information to search with
 */
router.route('/events/search')
  .post((req, res) => res.send([]));

/**
 * Save user itinerary
 */
router.route('/itinerary/save')
  .post((req, res) => res.send('Success'));

module.exports = router;
