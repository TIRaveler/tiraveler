import React from 'react';
import PropTypes from 'prop-types';

const ItineraryEntry = ({ event }) => (
  <div className="entry-list-entry media">
    <div className="media-left media-middle">
      <img className="media-object" src={event.image_url} alt="" />
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
