/* eslint no-underscore-dangle: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import {
  Button,
  Checkbox,
  Image,
  Card,
} from 'semantic-ui-react';

/** Toggle isSelected in photo and returns new array
 * @param {[]}     pictures Array of picture objects (See Photos proptypes)
 * @param {number} index    Index of photo to toggle
 */
const toggleSelectedPhoto = (pictures, index) => {
  const newPictures = pictures.slice();

  newPictures[index].isSelected = !newPictures[index].isSelected;

  return newPictures;
};

/**
 * Toggle selected photo and update state
 * @param {[]} pictures                         Array of pictures
 * @param {number} index                        Index of photo in array to toggle
 * @param {(event: *) => undefined} setPictures Set picture state using event.target.value
 */
const toggleSelectedPhotoAndUpdate = (pictures, index, setPictures) => {
  setPictures({
    target: {
      value: toggleSelectedPhoto(pictures, index),
    },
  });
};

/**
 * Create picture toggle event
 * @param pictures    Array of pictures
 * @param index       index of picture in array
 * @param setPictures fuction to set pictures state
 */
const getToggleEvent = (pictures, index, setPictures) => (
  () => {
    toggleSelectedPhotoAndUpdate(pictures, index, setPictures);
  }
);

/** Select photos to determine itinerary */
class Photos extends React.Component {
  componentDidMount() {
    const { setPictures, location } = this.props;

    fetch('/photos/search', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ location }),
    })
      .then(response => response.json())
      .then((data) => {
        const event = {
          target: {
            value: data.map(({ photo }) => ({
              id: photo.id,
              title: photo.title._content,
              description: photo.description._content,
              location: { lat: photo.location.latitude, lon: photo.location.longitude },
              tags: photo.tags.tag.map(
                ({ raw }) => {
                  const rawL = raw.toLowerCase();
                  return rawL;
                },
              ),
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
        <h1 className="ui big header center aligned page">
          Please select at least one photo that you like!
          {' '}
        </h1>
        <Card.Group itemsPerRow={5}>
          {
            pictures.map((photo, index) => (
              <Card key={photo.id}>
                <Card.Content>
                  <Image
                    style={{ height: '190px', width: '260px' }}
                    src={photo.srcPath}
                  />
                  <Card.Description>
                    {photo.title}
                  </Card.Description>
                  <Checkbox onClick={getToggleEvent(pictures, index, setPictures)} label={{ children: 'select' }} floated="right" />
                </Card.Content>
              </Card>
            ))
          }

        </Card.Group>
        <div className="ui segment">
          <div className="ui sticky">
            <Button.Group attached='bottom'>
              <Route render={({ history }) => (
                <Button
                  floated="left"
                  className="blue"
                  onClick={() => {
                    history.push('/search');
                  }}
                >
                  Start Over!
                </Button>
              )}
              />
              <Route render={({ history }) => (
                <Button
                  
                  id="submit"
                  floated="right"
                  className="green"
                  onClick={() => {
                    sendSelectedPhotos(history);
                  }}
                >
                  {'Let\'s travel!'}
                </Button>
              )}
              />
            </Button.Group>
          </div>
        </div>
      </div>
    );
  }
}


Photos.propTypes = {
  /**
   * Location to search for photos
   */
  location: PropTypes.string.isRequired,
  /**
   *  Holds all pictures
   */
  pictures: PropTypes.arrayOf(PropTypes.shape({
    /** Unique ID of picture */
    id: PropTypes.string,

    /** Title of picture */
    title: PropTypes.string,

    /** Description of photo */
    description: PropTypes.string,

    /** Location of photo */
    location: PropTypes.shape({
      lat: PropTypes.string,
      lon: PropTypes.string,
    }),

    /** Tags associated with photo */
    tags: PropTypes.arrayOf(PropTypes.string),

    /** URL image source */
    srcPath: PropTypes.string,
  })).isRequired,

  /**
   * Function to update App picture state
   * @param Input: Array of pictures (See Photos pictures prop-type)
   */
  setPictures: PropTypes.func.isRequired,

  /**
   * Function to submit pictures
   */
  sendSelectedPhotos: PropTypes.func.isRequired,
};

export default Photos;
