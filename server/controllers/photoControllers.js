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
  //const location = req.body.location;
  //const location = 'San Francisco';
  const location = 'London';
  //const location ='San Jose';
//location is set to London
 // const flickrPhotos = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${process.env.FLICKR_API}&tags=sightseeing%2Ctravel%2Ctrip%2Chiking%2Cfood%2Cacient&tag_mode=any&text=London&sort=interestingness-desc&accuracy=8&per_page=10&format=json&nojsoncallback=1&has_geo=1&page=1`

 const flickrPhotos1 = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${process.env.FLICKR_API}&tags=sightseeing%2Ctrip%2Ctravel%2CArchitecture%2Cart%2C${location}%2Cadventure%2Chikingtrail&tag_mode=any&text=${location}+&sort=interestingness-desc&accuracy=11&per_page=12&format=json&nojsoncallback=1&has_geo=1&page=1&media=photos`

  const flickrPhotos2 = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${process.env.FLICKR_API}&tags=%2Cfood%2Crestaurant%2Cdish%2Cmeal&tag_mode=all&text=${location}+&sort=relevance&accuracy=11&per_page=2&format=json&nojsoncallback=1&has_geo=1&page=1`

 // const flickrPhotos5 = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${process.env.FLICKR_API}&tags=adventure%2Chiking&tag_mode=any&text=${location}+&sort=interestingness-desc&accuracy=7&per_page=1&format=json&nojsoncallback=1&has_geo=1&page=1`

 // const flickrPhotos3 = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${process.env.FLICKR_API}&tags=Museum%2Cpainting%2Carche%2Cfishing&tag_mode=any&text=${location}+&sort=relevance&accuracy=7&per_page=2&format=json&nojsoncallback=1&has_geo=1&page=1`

 // const flickrPhotos4 = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${process.env.FLICKR_API}&tags=Architecture%2Cancient&tag_mode=all&text=${location}&sort=interestingness-desc&accuracy=6&has_geo=1&per_page=1&page=3&format=json&nojsoncallback=1`
 const flickrPhotos3 = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${process.env.FLICKR_API}&tags=Museum%2Cancient&tag_mode=all&text=${location}+&sort=interestingness-desc&accuracy=6&has_geo=1&per_page=1&safe_search=1&page=1&format=json&nojsoncallback=1`



 // https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=daff962e3851e47d776ca19fbc262fe1&tags=museum%2Chiking%2Cadventure%2Cfishing&tag_mode=any&text=London+&sort=relevance&accuracy=6&has_geo=1&per_page=10&page=1&format=json&nojsoncallback=1&api_sig=8830be34bb5187b2947dac4be099d785

  // axios.get(flickrPhotos2)
  //   .then(async (data) => {
  //     const photos = data.data.photos.photo;
  //     const photosInfo = await Promise.all(photos.map(async photo => getPhotoInfo(photo.id)));
  //     console.log(photosInfo)
  //     return photosInfo;
  //   })
  //   .then((photosInfo) => {
  //     res.status(200).send(photosInfo);
  //   })
  //   .catch((err) => {
  //     console.error(err);
  //   });

  axios.all([
      axios.get(flickrPhotos1),
      axios.get(flickrPhotos2),
      axios.get(flickrPhotos3),
      // axios.get(flickrPhotos4),
      // axios.get(flickrPhotos5)
    ])
    .then(axios.spread ((data1,data2,data3,data4,data5) => {
       const photos1 = data1.data.photos.photo;
       console.log('photos1',photos1);
       const photos2 = data2.data.photos.photo;
       console.log('photos2',photos2);
       const photos3 = data3.data.photos.photo;
       console.log('photos3',photos3);
       // const photos4 = data4.data.photos.photo;
       // console.log('photos4',photos4);
       // const photos5 = data5.data.photos.photo;
       // console.log('photos5',photos5);
       const photos = Object.assign(photos1,photos2,photos3);
       console.log('photo',photos);
       const photosInfo = Promise.all(photos.map(async photo => getPhotoInfo(photo.id)));
       return photosInfo;
    }))
    .then((photosInfo) => {
      res.status(200).send(photosInfo);
    })
    .catch((err) => {
      console.error(err);
     });
  }
