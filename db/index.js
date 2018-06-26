const Sequelize = require('sequelize');
const database = new Sequelize('TIRavelerDB', 'root', '',{
  dialect: 'mysql'
});

const User = database.define('user', {
  username: Sequelize.STRING,
  password: Sequelize.STRING
})

const Itinerary = database.define('itinerary', {
  name: Sequelize.STRING
})

Itinerary.belongsTo(User)

const Event = database.define('event', {
  name: Sequelize.STRING, 
  location: Sequelize.STRING, 
  yelplink: Sequelize.STRING, 
  tags: Sequelize.STRING, 
  location: Sequelize.DECIMAL
})

Event.belongsToMany(Itinerary, {through: 'ItineraryEventJoin'});
Itinerary.belongsToMany(Event, {through: 'ItineraryEventJoin'});

module.exports = db;