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
  const { location } = req.body;

  // for general travel info search
  const flickrPhotos1 = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${process.env.FLICKR_API}&tags=sightseeing%2Ctrip%2Cbike%2CArchitecture%2Cart%2C${location}%2Cadventure%2Chiking&tag_mode=any&text=${location}+&sort=interestingness-desc&accuracy=11&privacy_filter=1&per_page=10&format=json&nojsoncallback=1&has_geo=1&page=1&media=photos`;

  // for food search
  const flickrPhotos2 = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${process.env.FLICKR_API}&tags=dish%2Cmeal&tag_mode=any&text=${location}+food+&sort=relevance&accuracy=11&privacy_filter=1&per_page=2&format=json&nojsoncallback=1&has_geo=1&page=1`;


  // for search museum
  const flickrPhotos3 = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${process.env.FLICKR_API}&tags=${location}%2CMuseum%2Cancient&tag_mode=all&text=museum+&sort=interestingness-desc&accuracy=6&has_geo=1&per_page=1&safe_search=1&page=1&format=json&nojsoncallback=1`;


  // make three requests for general travel info, food info and museum info
  axios.all([
    axios.get(flickrPhotos1),
    axios.get(flickrPhotos2),
    axios.get(flickrPhotos3),
  ])
    .then(axios.spread((data1, data2, data3) => {
      const photos1 = data1.data.photos.photo;
      const photos2 = data2.data.photos.photo;
      const photos3 = data3.data.photos.photo;
      const photos = Object.assign(photos1, photos2, photos3);
      const photosInfo = Promise.all(photos.map(async photo => getPhotoInfo(photo.id)));
      return photosInfo;
    }))
    .then((photosInfo) => {
      res.status(200).send(photosInfo);
    })
    .catch((err) => {
      console.error(err);
    });
};
