const { User } = require('../../db/index');
const bcrypt = require('bcrypt');

exports.login = (req, res) => {
  let pw = req.body.password;
  let email = req.body.email;

  User.findOne({
    where: { username: email },
  }).then((user) => {
    if (user) {
      let isMatch = bcrypt.compareSync(pw, user.password);
      if (isMatch) {
        res.status(200).send(isMatch);
      }
    } else {
      let hash = bcrypt.hashSync(pw, 10);
      User.create({ username: email, password: hash }).then(() => {
        res.status(200).send('Created');
      }).catch(() => {
        res.status(404).send('Not created');
      })
    }
  }).catch((err) => {
    console.error(err);
    res.status(404).send('Invalid password/email');
  })

};

exports.logout = (req, res) => {
  if (req.session.user && req.cookies.user_sid) {
    res.clearCookie('user_sid');
    res.redirect('/');
};

exports.register = (req, res) => {
  res.send('WELCOME!');
};
