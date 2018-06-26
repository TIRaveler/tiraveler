const Sequelize = require('sequelize');

const database = new Sequelize('TIRavelerDB', 'root', '', {
  dialect: 'mysql',
});

const Event = require('./schemas/Event')(database, Sequelize);
const Itinerary = require('./schemas/Itinerary')(database, Sequelize);
const User = require('./schemas/User')(database, Sequelize);

Event.associateMany(Itinerary);
// Itinerary.associateMany(Event);
Itinerary.associate(User);

database.sync({ force: false });

module.exports = {
  Event,
  Itinerary,
  User,
  Sequelize: database,
};
