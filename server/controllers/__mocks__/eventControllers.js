const eventData = require('../sample_data/events');

exports.search = (req, res) => {
  res.send(eventData);
};
