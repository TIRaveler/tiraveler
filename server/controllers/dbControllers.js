const { Event, Itinerary } = require('../../db/index');

exports.save = (req, res) => {
  Itinerary.saveItinerary();
  console.log('dbController')
  res.send('You are now entering the twilight zone.!!');
};
