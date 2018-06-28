const axios = require('axios');
const config = require('../../config.js');

const getPhotoInfo = (photoId) => {

  let flickrPhotoInfo = `https://api.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=${config.APIs.FLICKR_API}&photo_id=${photoId}&format=json&nojsoncallback=1`;

  return (axios.get(flickrPhotoInfo)
    .then(data => {
      photoInfo = data.data;
      return photoInfo;
    })
    .catch(err => {
      console.error(err);
    })
  )
}

exports.search = (req, res) => {
  let price = req.body.price;
  let location = req.body.location;

  let flickrPhotos = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${config.APIs.FLICKR_API}&tags=${location}&text=${location}&privacy_filter=1&accuracy=16&has_geo=1&radius=5&format=json&nojsoncallback=1&authenticated=true&perms=read`;

  axios.get(flickrPhotos)
    .then(data => {
      return new Promise((reject, resolve) => {
        let photos = data.data.photos.photo;
        let photosInfo = photos.map(photo => {
          console.log(photo.id);
          console.log(getPhotoInfo(photo.id));
          getPhotoInfo(photo.id);
        })
        .then(photosInfo => {
          res.status(200).send(photosInfo);
        })
      })
      // let formatPhotos = photos.map(photo => {
      //   return {
      //     photoURL: `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`,
      //     title: photo.title
      //   }
      // });
      // res.status(200).send(formatPhotos);

    })
    .catch(err => {
      console.error(err);
    })

};