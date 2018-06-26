module.exports = function (database, DataTypes) {
  const Itinerary = database.define('itinerary', {
    name: Sequelize.STRING
  })

  Itinerary.associate = function(models) {
    Itinerary.hasOne(models, {foreignKey : models.id})
  }
}