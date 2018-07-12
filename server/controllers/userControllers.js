const bcrypt = require('bcrypt');
const { User, db } = require('../../db/index');


exports.login = (req, res) => {
  const { name, password } = req.body;

  User.findOne({
    where: { username: name },
  }).then((user) => {
    if (user) {
      const isMatch = bcrypt.compareSync(password, user.password);
      if (isMatch) {
        req.session.user = user;
        const userId = user.id;
        // Itinerary.findAll({
        //   where: {
        //     userId: user.id,
        //   },
        // })
        const sql = `select e.name eventName, e.location address, price, i.name itinerariesName,e.yelplink yelplink, i.id from events e join itinEvents ie on ie.eventId=e.id join itineraries i on i.id = ie.itinId where i.userId='${userId}'`;
        db.query(sql, (err, events) => {
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
          res.status(200).send(itineraries);
        });
      } else {
        console.log('password is not a match: ', isMatch);
      }
    }
  }).catch((err) => {
    console.error(err);
    res.status(404).send('Invalid password/name');
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
