import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Checkbox,
  Image,
} from 'semantic-ui-react';


// Toggle isSelected in photo and returns new array
// pictures: Array of picture objects (See Photos proptypes)
// index: Index of photo to toggle
const toggleSelectedPhoto = (pictures, index) => {
  const newPictures = pictures.slice();

  newPictures[index].isSelected = !newPictures[index].isSelected;

  return newPictures;
};

// Toggle selected photo and update state
// pictures: Array of pictures
// index: Index of photo in array to toggle
// setPictures: Function to set picture state using event.target.value
const toggleSelectedPhotoAndUpdate = (pictures, index, setPictures) => {
  setPictures({
    target: {
      value: toggleSelectedPhoto(pictures, index),
    },
  });
};

// Create picture toggle event
// pictures: Array of pictures
// index: index of picture in array
// setPictures: fuction to set pictures state
const getToggleEvent = (pictures, index, setPictures) => (
  () => {
    toggleSelectedPhotoAndUpdate(pictures, index, setPictures);
  }
);

// Select photos to determine itinerary
class Photos extends React.Component {
  componentDidMount() {
    const { setPictures } = this.props;

    fetch('/photos/search', { method: 'POST' })
      .then(response => response.json())
      .then((data) => {
        const event = {
          target: {
            value: data.map(({ photo }) => ({
              id: photo.id,
              title: photo.title,
              srcPath: `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`,
            })),
          },
        };
        return event;
      })
      .then(setPictures);
  }


  render() {
    const { pictures, setPictures, sendSelectedPhotos } = this.props;
    return (
      <div>
        <h1 className="ui big header">
          Select 5 places you want to go!
          {' '}
        </h1>
        <Image.Group size="medium">
          {
            pictures.map((photo, index) => (
              <div key={photo.id}>
                <Image
                  src={photo.srcPath}
                  text={photo.title}
                />
                <Checkbox onClick={getToggleEvent(pictures, index, setPictures)} label={{ children: 'select' }} />
              </div>
            ))
          }
        </Image.Group>
        <Button className="blue" onClick={sendSelectedPhotos}>
          Submit
        </Button>
      </div>
    );
  }
}


Photos.propTypes = {
  // Holds all pictures
  pictures: PropTypes.arrayOf({
    // Unique ID of picture
    id: PropTypes.number,
    // Whether user has selected picture
    isSelected: PropTypes.bool,
    // Title of picture
    title: PropTypes.string,
  }).isRequired,
  // Function to send selected photos
  // Input: Event of submit button
  sendSelectedPhotos: PropTypes.func.isRequired,
  // Function to update App picture state
  // Input: Array of pictures (See Photos pictures prop-type)
  setPictures: PropTypes.func.isRequired,
};

export default Photos;
