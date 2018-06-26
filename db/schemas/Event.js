module.exports = (database, DataTypes) => {
  const Event = database.define('event', {
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    yelplink: DataTypes.STRING,
    tags: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    photoUrl: DataTypes.STRING,
  });

  console.log('Event', Event);

  Event.associateMany = (models) => {
    Event.hasMany(models, { foreignKey: models.id });
  };

  return Event;
};
