const axios = require('axios');

const getPhotoInfo = (photoId) => {
  const flickrPhotoInfo = `https://api.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=${process.env.FLICKR_API}&photo_id=${photoId}&format=json&nojsoncallback=1`;

  return (axios.get(flickrPhotoInfo)
    .then((data) => {
      const photoInfo = data.data;
      return photoInfo;
    })
    .catch((err) => {
      console.error(err);
    })
  );
};

exports.search = (req, res) => {
<<<<<<< HEAD
  const location = req.body.location || '';
  const flickrPhotos = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${process.env.FLICKR_API}&tags=${location}&text=${location}&per_page=10&privacy_filter=1&accuracy=16&has_geo=1&radius=5&format=json&nojsoncallback=1&authenticated=true&perms=read`;
=======
  const { price, location } = req.body;
  // let travelTags = ['wanderlust', 'adventureseeker', 'doyoutravel', 'travelmore', 'goexplore', 'wonderfulplaces', 'openmyworld', 'lovetotravel', 'adventurethatislife', 'roamtheplanet', 'travelblogging', 'thattravelblog', 'bloggerlife', 'travellifestyle', 'travelpreneur', 'digitalnomads', 'workandtravel', 'locationindependent', 'workhardanywhere', 'roomwithaview', 'hotellife', 'hotelroom', 'luxuryhotels', 'hoteldesign', 'luxuryholiday', 'hotelfun', 'responsibletravel', 'seekmoments', 'momentsofmine', 'postcardsfromtheworld', 'getoutstayout', 'choosemountains', 'travelgirl', 'traveldudes', 'solotravel', 'travelcouple', 'travelquotes', 'viewfromabove', 'travel', 'nature', 'sunset', 'trip', 'travelgram', 'vacation', 'instatravel', 'adventure', 'travelphotography', 'tourist', 'tourism', 'scenic', 'sightseeing'];
  const flickrPhotos = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${process.env.FLICKR_API}&tags=${location}&text=${location}&privacy_filter=1&accuracy=16&has_geo=1&radius=5&format=json&nojsoncallback=1&authenticated=true&perms=read`;
>>>>>>> Add price to photo array

  axios.get(flickrPhotos)
    .then(async (data) => {
      const photos = data.data.photos.photo;
      console.log('Number of photos', photos.length);
      const photosInfo = await Promise.all(photos.map(async photo => getPhotoInfo(photo.id)));
      return photosInfo;
    })
    .then((photosInfo) => {
      const photosByViewsCount = photosInfo.sort((photoA, photoB) => (
        photoB.photo.views - photoA.photo.views
      ));
      return photosByViewsCount.slice(0, 10);
    })
    .then((photosByViewsCount) => {
      res.status(200).send(photosByViewsCount);
    })
    .catch((err) => {
      console.error(err);
    });
};
