module.exports = (database, DataTypes) => {
  const Itinerary = database.define('itinerary', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: DataTypes.STRING,
  });

  Itinerary.associate = (models) => {
    Itinerary.hasOne(models, { foreignKey: models.id });
  };

  Itinerary.associateMany = (models) => {
    Itinerary.hasMany(models, { foreignKey: models.id });
  };

  Itinerary.saveItinerary = Itin => Itinerary.create({ name: Itin.name })
    .then(result => result.dataValues.id);

  return Itinerary;
};
