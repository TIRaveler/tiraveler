module.exports = (database, DataTypes) => {
  const Itinerary = database.define('itinerary', {
    id: {
      type: DataTypes.UUID,
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

  Itinerary.saveItinerary = () => {
    console.log('you have saved your itinerary!!')
  };

  return Itinerary;
};
