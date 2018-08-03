const bcrypt = require('bcrypt');
const mysql = require('mysql2');
const { User, databaseUrl } = require('../../db/index');

/**
 * Login user
 * @param {*} req Express request object
 * @param {*} res Express response object
 * @returns {'Success' | 'Invalid password/name'} Server response
 */
exports.login = (req, res) => {
  const { name, password } = req.body;

  User.findOne({
    where: { username: name },
  }).then((user) => {
    if (user) {
      const isMatch = bcrypt.compareSync(password, user.password);
      if (isMatch) {
        req.session.user = user;
        res.status(200).send('Success');
        return;
      }
    }

    // There is no user, or bad username and password
    // Throw error
    throw new Error('Invalid password/name');
  }).catch((err) => {
    console.error(err);
    res.status(401).send('Invalid password/name');
  });
};

/**
 * Get users itineraries
 * @param {*} req Express request object
 * @param {*} res Express response object
 * @returns {[*]} All itineraries associated with user
 */
exports.getItineraries = (req, res) => {
  // Create SQL
  const userId = req.session.user.id;
  const sql = `select e.name eventName, e.location address, price, i.name itinerariesName,e.yelplink yelplink, e.photoUrl image_url, e.rating rating, i.id from events e join itinEvents ie on ie.eventId=e.id join itineraries i on i.id = ie.itinId where i.userId='${userId}'`;

  // Open connection
  const connection = mysql.createConnection(databaseUrl);

  // Lookup itineraries
  connection.query(sql, (err, events) => {
    if (err) throw err;
    const itineraries = events.reduce((result, event) => {
      // Copy result
      const newResult = result.slice();

      for (let itinIndex = 0; itinIndex < newResult.length; itinIndex += 1) {
        // Iterate through stored itineraries
        const itin = newResult[itinIndex];

        if (itin.name === event.itinerariesName) {
          itin.events.push(event);
          return newResult;
        }
      }
      // Not in array
      newResult.push({
        name: event.itinerariesName,
        events: [event],
      });

      // Return result
      return newResult;
    }, []);

    // Close connection and send results
    connection.end();
    res.status(200).send(itineraries);
  });
};

exports.logout = (req, res) => {
  console.log('inside of logout in userCtrl', req.session);
  req.session.reset();
  res.status(200).send('Logged out!');
};

exports.signup = (req, res) => {
  const { name, password } = req.body;
  console.log('name: ', name, 'password: ', password);

  User.findOne({
    where: { username: name },
  }).then((user) => {
    if (user) {
      res.send('User already exists');
    } else {
      const hash = bcrypt.hashSync(password, 10);
      User.create({ username: name, password: hash }).then(() => {
        req.session.user = user;
        res.status(201).send('Created');
      }).catch(() => {
        res.status(404).send('Not created');
      });
    }
  }).catch((err) => {
    console.error(err);
    res.status(404).send(err);
  });
};

exports.checkUser = (req, res) => {
  if (req.session && req.user) {
    res.send('Logged in');
  }
};
