module.exports = (database, DataTypes) => {
  const Event = database.define('event', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    yelplink: DataTypes.STRING,
    price: DataTypes.STRING,
    photoUrl: DataTypes.STRING,
    rating: DataTypes.STRING,
  });

  Event.saveEvent = (event, itinId) => Event.create({
    name: event.name,
    location: event.location.display_address.join(','),
    yelplink: event.url,
    price: event.price,
    photoUrl: event.image_url,
    rating: event.rating,
  }).then(result => [result.dataValues.id, itinId]);

  return Event;
};
