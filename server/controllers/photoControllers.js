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
  const location = req.body.location;
//location is set to London
 const flickrPhotos = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${process.env.FLICKR_API}&tags=sightseeing%2Ctravel%2Ctrip%2Chiking%2Cfood%2Cacient&tag_mode=any&text=London&sort=relevance&accuracy=8&per_page=10&format=json&nojsoncallback=1&has_geo=1&page=1`

  axios.get(flickrPhotos)
    .then(async (data) => {
      const photos = data.data.photos.photo;
      const photosInfo = await Promise.all(photos.map(async photo => getPhotoInfo(photo.id)));
        console.log(photosInfo);
      return photosInfo;
    })
    .then((photosInfo) => {
      res.status(200).send(photosInfo);
    })
    .catch((err) => {
      console.error(err);
    });
};
