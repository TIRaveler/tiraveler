module.exports = function (database, DataTypes) {
  const User = database.define('user', {
    username: Sequelize.STRING,
    password: Sequelize.STRING
  })
}