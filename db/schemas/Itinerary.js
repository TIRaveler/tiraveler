module.exports = (database, DataTypes) => {
  const Itinerary = database.define('itinerary', {
    name: DataTypes.STRING,
  });

  Itinerary.associate = (models) => {
    Itinerary.hasOne(models, { foreignKey: models.id });
  };

  Itinerary.associateMany = (models) => {
    Itinerary.hasMany(models, { foreignKey: models.id });
  };

  return Itinerary;
};
