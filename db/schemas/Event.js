module.exports = (database, DataTypes) => {
  const Event = database.define('event', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    yelplink: DataTypes.STRING,
    tags: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    photoUrl: DataTypes.STRING,
  });

  return Event;
};
