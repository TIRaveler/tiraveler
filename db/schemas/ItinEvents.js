module.exports = (database, DataTypes) => {
  const ItinEvents = database.define('itinEvent', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    eventId: DataTypes.STRING,
    itinId: DataTypes.STRING,
  });

  ItinEvents.saveItem = arrayOfIds => ItinEvents.create({
    eventId: arrayOfIds[0],
    itinId: arrayOfIds[1],
  }).then(result => result);
  return ItinEvents;
};
