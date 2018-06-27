module.exports = (database, DataTypes) => {
  const Itinerary = database.define('itinerary', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    name: DataTypes.STRING,
  });

  return Itinerary;
};
