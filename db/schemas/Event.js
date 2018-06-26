module.exports = function (database, DataTypes) {
  const Event = database.define('event', {
    name: Sequelize.STRING, 
    location: Sequelize.STRING, 
    yelplink: Sequelize.STRING, 
    tags: Sequelize.STRING, 
    location: Sequelize.DECIMAL
  })
}