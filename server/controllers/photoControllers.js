const axios = require('axios');

const getPhotoInfo = (photoId) => {
  const flickrPhotoInfo = `https://api.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=${process.env.FLICKR_API}&photo_id=${photoId}&format=json&nojsoncallback=1`;

  return (axios.get(flickrPhotoInfo)
    .then((data) => {
      photoInfo = data.data;
      return photoInfo;
    })
    .catch((err) => {
      console.error(err);
    })
  );
};

exports.search = (req, res) => {
  //const price = req.body.price;
  const location = req.body.location;
  // let travelTags = ['wanderlust', 'adventureseeker', 'doyoutravel', 'travelmore', 'goexplore', 'wonderfulplaces', 'openmyworld', 'lovetotravel', 'adventurethatislife', 'roamtheplanet', 'travelblogging', 'thattravelblog', 'bloggerlife', 'travellifestyle', 'travelpreneur', 'digitalnomads', 'workandtravel', 'locationindependent', 'workhardanywhere', 'roomwithaview', 'hotellife', 'hotelroom', 'luxuryhotels', 'hoteldesign', 'luxuryholiday', 'hotelfun', 'responsibletravel', 'seekmoments', 'momentsofmine', 'postcardsfromtheworld', 'getoutstayout', 'choosemountains', 'travelgirl', 'traveldudes', 'solotravel', 'travelcouple', 'travelquotes', 'viewfromabove', 'travel', 'nature', 'sunset', 'trip', 'travelgram', 'vacation', 'instatravel', 'adventure', 'travelphotography', 'tourist', 'tourism', 'scenic', 'sightseeing'];

  // const flickrPhotos = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${process.env.FLICKR_API}&tags=${location}&text=${location}&privacy_filter=1&accuracy=16&has_geo=1&radius=5&format=json&nojsoncallback=1&authenticated=true&perms=read`;

   // const flickrPhotos = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${process.env.FLICKR_API}&tags=London&text=${location}&privacy_filter=1&accuracy=16&has_geo=1&radius=5&per_page=10&format=json&nojsoncallback=1&authenticated=true&perms=read`;

   // const flickrPhotos = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${process.env.FLICKR_API}&tags=london+londonbridge&text_mode=ALL&views>300&tag_mode=ALL&per_page=10&format=json&nojsoncallback=1`


   // const flickrPhotos = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=b1088ff6013a6c50850d8846e6814813&tags=food%2Cchinatown&tag_mode=any&text=san+francisco&sort=+interestingness-desc&per_page=10&format=json&nojsoncallback=1&sort=+interestingness-desc`

   // const flickrPhotos = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${process.env.FLICKR_API}&tags=food%2Cbeach%2Chiking%2Cmountain&tag_mode=any&text=${location}&sort=relevance&accuracy=6&per_page=20&format=json&nojsoncallback=1&has_geo=1`

const flickrPhotos = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${process.env.FLICKR_API}&tags=sightseeing%2Ctrip%2Ctravel%2Chiking%2Cfood%2Cacient&tag_mode=any&text=sanfrancisco&sort=interestingness-desc&accuracy=8&per_page=12&format=json&nojsoncallback=1&has_geo=1&page=1`


// const flickrPhotos2 = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${process.env.FLICKR_API}&tags=food%2C+restaurant%2C+dish&tag_mode=all&text=sanfrancisco&sort=relevance&per_page=10&format=json&nojsoncallback=1&has_geo=1&page=1`

// const flickrPhotos = flickrPhotos1.photos.photo.push(flickrPhotos2.photos.photo[0]);
// const flickrPhotos ='https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=b5bfa150afa31b190bd3206ec315515c&tags=food%2C+restaurant&tag_mode=ALL&text=san+francisco&sort=relevance&has_geo=1&per_page=10&format=json&nojsoncallback=1'


// const flickrPhotos = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${process.env.FLICKR_API}&tags=museum&tag_mode=any&text=san+francisco&sort=relevance&accuracy=6&per_page=10&format=json&nojsoncallback=1&has_geo=1`

   // const flickrPhotos=`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${process.env.FLICKR_API}&tags=beach&per_page=10&format=json`

  axios.get(flickrPhotos)
    .then(async (data) => {
      const photos = data.data.photos.photo;
      const photosInfo = await Promise.all(photos.map(async photo => getPhotoInfo(photo.id)));
      console.log(photos);
      return photosInfo;
    })
    // .then((photosInfo) => {
    //   const photosByViewsCount = photosInfo.sort((photoA, photoB) => photoB.photo.views - photoA.photo.views);

    //   return photosByViewsCount.slice(0, 10);
    // })

    // .then(photosByViewsCount => {
    //   let finalReturnArray = photosByViewsCount.filter((photo, index) => {
    //     let tags = photo.photo.tags.tag;
    //     tags.filter(tag => {
    //       if (travelTags.includes(tag._content)) {
    //         let photoCopy = photo;
    //         photosByViewsCount.splice(index, 1);
    //         return photoCopy;
    //       }
    //     })
    //   });
    //   // if photosByTag.length < 10 // ensure that length is 10
    //     // push first 10 - photosByTag.length items from photosByViewsCount
    //   if (finalReturnArray.length < 10) {
    //     finalReturnArray.concat(photosByViewsCount.splice(0, 10 - finalReturnArray.length));
    //   }
    //   console.log(finalReturnArray.length);
    //   return finalReturnArray;
    // })
    .then((photosInfo) => {
      res.status(200).send(photosInfo);
    })
    .catch((err) => {
      console.error(err);
    });
};
