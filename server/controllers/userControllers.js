const bcrypt = require('bcrypt');
const { User, Itinerary, db } = require('../../db/index');


exports.login = (req, res) => {
  const pw = req.body.password;
  const name = req.body.name;

  User.findOne({
    where: { username: name },
  }).then((user) => {
    if (user) {
      const isMatch = bcrypt.compareSync(pw, user.password);
      if (isMatch) {
        req.session.user = user;
        const userId=user.id;
        // Itinerary.findAll({
        //   where: {
        //     userId: user.id,
        //   },
        //})
        const sql= `select e.name eventName, e.location Address, price, i.name IternarariesName,i.id from events e join itinEvents ie on ie.eventId=e.id join itineraries i on i.id = ie.itinId where i.userId='${userId}'`
        db.query(sql,(err,events) => {
          if (err) throw err;
          const result = events.reduce((itineraries,event)=> {
            if (itineraries[event.IternarariesName] === undefined){
                itineraries[event.IternarariesName] = [event]
            }else{
              itineraries[event.IternarariesName].push(event);
            }
            return itineraries;
          },{})
          res.status(200).send(result);
        })
      } else {
        console.log('pw is not a match: ', isMatch);
      }
    } else {
      const hash = bcrypt.hashSync(pw, 10);
      User.create({ username: name, password: hash }).then(() => {
        req.session.user = user;
        res.status(201).send('Created');
      }).catch(() => {
        res.status(404).send('Not created');
      });
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

exports.checkUser = (req, res) => {
  if (req.session && req.user) {
    res.send('Logged in');
  }
};
