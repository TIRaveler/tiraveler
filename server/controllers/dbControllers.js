const { Event, Itinerary } = require('../../db/index');

exports.save = (req, res) => {
  Itinerary.saveItinerary(req.body.itin)
    .then((itinId) => {
      const data = {
        itin: itinId,
        event: Event.saveEvent(req.body.events),
      };
      return data;
    })
    .then((data) => {
      console.log(data, 'THE GOODS');
    })
    .catch(error => res.send(error));
  res.send('You are now entering the twilight zone.!!');
};
