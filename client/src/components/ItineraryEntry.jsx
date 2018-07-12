import React from 'react';
import PropTypes from 'prop-types';
import {
  Image,
  Card,
} from 'semantic-ui-react';

const ItineraryEntry = ({ event }) => (
  <div className="entry-list-entry media">
    <div className="media-left media-middle">
      <Card>
          <Image style={{ width: '300px',height: '300px' }} center src={event.image_url} />
          <Card.Content>
            <Card.Header>
              {event.name}
            </Card.Header>
            <Card.Description>
              <p>Price: {event.price ? event.price : "Free or N/A"}</p>
              <p>Rating: {event.rating}</p>
              <p> {event.address ? event.address : " "} </p>
            </Card.Description>
          </Card.Content>
      </Card>
    </div>
    <div className="media-body">
      <div className="entry-list-entry-title">
        {event.eventName}
      </div>
    </div>
  </div>
);

ItineraryEntry.propTypes = {
  event: PropTypes.shape({
    image_url: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};

export default ItineraryEntry;
