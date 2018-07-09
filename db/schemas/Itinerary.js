module.exports = (database, DataTypes) => {
  const Itinerary = database.define('itinerary', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    userId: DataTypes.STRING,
  });

  Itinerary.associate = (models) => {
    Itinerary.hasOne(models, { foreignKey: models.id });
  };

  Itinerary.associateMany = (models) => {
    Itinerary.hasMany(models, { foreignKey: models.id });
  };

  Itinerary.saveItinerary = (Itin, userId) => Itinerary.create({ userId, name: Itin.name })
    .then(result => result.dataValues.id);

  Itinerary.findByUser = userId => Itinerary.findAll({
    where: {
      userId,
    },
  });

  return Itinerary;
};
