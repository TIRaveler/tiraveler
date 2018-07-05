const { Event, Itinerary, ItinEvents } = require('../../db/index');

exports.save = (req, res) => {
  for (let i = 0; i < req.body.events.length; i += 1) {
    Event.saveEvent(req.body.events[i])
      .then(result => Itinerary.saveItinerary(req.body.itin, result))
      .then(result => ItinEvents.saveItem(result))
      .then(() => console.log('event saved'))
      .catch(error => console.error(error));
  }
  res.status(200).send('Success!');
};


// Promise.all(req.body.events.map(Event.saveEvent))
//   .then(results  => Pormise.all(results.map(result => (
//     Itinerary.saveItinerary(req.body.itin, result
//   )))))
//   .then(results => Promise.all(...ItinEvents.saveItem...))
//   .then(console log sthn here)
