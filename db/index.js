const Sequelize = require('sequelize');
const mysql = require('mysql2');

// const databaseUrl = process.env.DATABASE_URL
//   || `mysql://${process.env.DB_USER}${process.env.DB_PASSWORD ? `:${process.env.DB_PASSWORD}` : undefined}@localhost/TIRavelerDB?reconnect=true`;


// const database = new Sequelize(databaseUrl, {
//   dialect: 'mysql',
// });


//const db = mysql.createConnection(databaseUrl);
// const database = new Sequelize('TIRavelerDB', 'root', process.env.DB_PASSWORD, {
//   dialect: 'mysql',
// });

const database = new Sequelize('TIRavelerDB', 'root', '', {
  dialect: 'mysql',
});

const db = mysql.createConnection({
  host: 'localhost',
  password: process.env.DB_PASSWORD,
  database: 'TIRavelerDB',
  user: 'root', // default
});

const Event = require('./schemas/Event')(database, Sequelize);
const Itinerary = require('./schemas/Itinerary')(database, Sequelize);
const User = require('./schemas/User')(database, Sequelize);
const ItinEvents = require('./schemas/ItinEvents')(database, Sequelize);

database.sync({ force: false });

module.exports = {
  Event,
  Itinerary,
  User,
  ItinEvents,
  Sequelize: database,
  db,
};
