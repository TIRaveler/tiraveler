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

  // Itinerary.saveItinerary(req.body.itin)
  //   .then(itinId => Event.saveEvent(req.body.events[0], itinId))
  //   .then(result => console.log(result, 'MOREMORE'))
  //   .catch(error => res.send(error));
  // res.send('You are now entering the twilight zone.!!');
};
