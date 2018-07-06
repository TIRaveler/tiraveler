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
      //term: 'tour+museum+sightseeing+food'
    },
  },
)
  .then(resp => resp.data.businesses)
  .catch(Console.err);

/**
 * Get event tags to search
 * @param {Array} pictures all pictures to analyze
 * @return {Array} Tags to search
 */
const resolveTags = (pictures) => {
  // TODO: Resolve tags
  //['hiking', 'fishing']
  let travelTags=['museum', 'sightseeing','food','adventure','tour','ancient','architecture','boat','bike','nature','river','beach'];
  let selectedTags=['sightseeing'];
  travelTags.forEach(tag =>
      pictures.forEach(pic => {
        if (pic.tags.indexOf(tag)!==-1){
          selectedTags.push(tag);
      }
  }))
  let tags=selectedTags.join('+');
  console.log('Event Tags',tags)
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
    res.send({ error: 'Must specify location and pictures' });
    return;
  }


  const tags = resolveTags(pictures);
  //console.log(tags);
  const events = await getEvents(location, tags);
  res.send(events);
};
