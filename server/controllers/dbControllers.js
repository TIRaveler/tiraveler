const { Event, Itinerary, ItinEvents } = require('../../db/index');

/**
 * Save itinerary and associated events
 * @param {*} req Express request
 * @param {*} res Express response
 */
exports.save = (req, res) => {
  // Save itinerary
  console.log(req.body.events[0].location, 'OMG');
  Itinerary.saveItinerary(req.body.itin, req.session.user.id)
    .then((itinId) => {
      // Save all itineraries
      for (let i = 0; i < req.body.events.length; i += 1) {
        Event.saveEvent(req.body.events[i], itinId)
          .then(result => ItinEvents.saveItem(result))
          .then(() => console.log('event saved'))
          .catch(error => console.error(error));
      }
    });

  // Send result
  res.status(200).send('Success!');
};

// Promise.all(req.body.events.map(Event.saveEvent))
//   .then(results  => Pormise.all(results.map(result => (
//     Itinerary.saveItinerary(req.body.itin, result
//   )))))
//   .then(results => Promise.all(...ItinEvents.saveItem...))
//   .then(console log sthn here)
