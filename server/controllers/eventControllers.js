const axios = require('axios');
const Console = require('../Console');

/**
 * Get events fitting location and tag
 * @param {String} location Location to search for events
 * @param {Array} tags Array of tags to search for
 * @return {Array} Array of events
 */
const getEvents = (location, tags) => axios.get(
  'https://api.yelp.com/v3/businesses/search',
  {
    headers: {
      Authorization: `Bearer ${process.env.YELP_API}`,
    },
    params: {
      location,
      term: tags,
    },
  },
)
  .then(resp => resp.data.businesses)
  .catch(Console.err);

/**
 * Get event tags to search
 * @param {Array} pictures all pictures to analyze
 * @return {String} Tags to search
 */
const resolveTags = (pictures) => {
  const travelTags = ['museum', 'sightseeing', 'food', 'adventure', 'tour', 'ancient', 'architecture', 'boat', 'bike', 'nature', 'river', 'beach', 'night'];
  const selectedTags = ['sightseeing', 'travel'];
  travelTags.forEach(tag => pictures.forEach((pic) => {
    if (pic.tags.indexOf(tag) !== -1) {
      selectedTags.push(tag);
    }
  }));
  const tags = selectedTags.join('+');
  return tags;
};


/**
 * Search for events
 * @param {Object} req Express server request
 * @param {Object} req.body POST body
 * @param {String} req.body.location Location to search
 * @param {Array} req.body.pictures Picture information to search with
 * @param {Object} res Express server response
 * @return {Array} Array of events
 */
module.exports.search = async (req, res) => {
  const { location, pictures } = req.body;

  if (!location || !pictures) {
    res.status(400);
    res.statusMessage = 'Missing location or pictures parameter';
    res.send(new Error('Missing location or pictures'));
    return;
  }


  const tags = resolveTags(pictures);
  const events = await getEvents(location, tags);
  res.send(events);
};
