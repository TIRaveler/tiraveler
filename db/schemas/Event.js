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
    tags: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    photoUrl: DataTypes.STRING,
  });

  // Event.saveEvent = (eventArray) => {
  //   const associationPromises = [];
  //   const eventIds = [];
  //   eventArray.forEach((event) => {
  //     associationPromises.push(Event.create({
  //       name: event.name,
  //       location: event.location,
  //       yelplink: event.yelplink,
  //       tags: event.tags,
  //       price: event.price,
  //       photoUrl: event.photoUrl,
  //     }).then(result => result.dataValues.id));
  //     return Sequelize.Promise.all(associationPromises);
  //   });
  //   console.log(associationPromises, 'MORE GOODS');
  // };



  // DO the maping in here, return whole thing we need
  Event.saveEvent = event => Event.create({
    name: event.name,
    location: event.location,
    yelplink: event.yelplink,
    tags: event.tags,
    price: event.price,
    photoUrl: event.photoUrl,
  }).then(result => result.dataValues.id);

  return Event;
};
