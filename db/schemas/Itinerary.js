module.exports = function (database, DataTypes) {
  const Itinerary = database.define('itinerary', {
    name: Sequelize.STRING
  })
}