const Sequelize = require('sequelize');

const databaseUrl = process.env.DATABASE_URL || 'mysql://root@localhost?reconnect=true';
const database = new Sequelize(databaseUrl, {
  dialect: 'mysql',
});

const Event = require('./schemas/Event')(database, Sequelize);
const Itinerary = require('./schemas/Itinerary')(database, Sequelize);
const User = require('./schemas/User')(database, Sequelize);

Event.belongsToMany(Itinerary, { through: 'itineraryEvent' });
Itinerary.belongsToMany(Event, { through: 'itineraryEvent' });
Itinerary.belongsTo(User);
User.hasMany(Itinerary);

database.sync({ force: false });

module.exports = {
  Event,
  Itinerary,
  User,
  Sequelize: database,
};
