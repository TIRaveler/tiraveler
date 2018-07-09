import React from 'react';
import PropTypes from 'prop-types';

const ItineraryModalEntry = ({ entry }) => (
  <div className="entry-list-entry media">
    <div className="media-left media-middle">
      <img className="media-object" src={entry.image_url} alt="" />
    </div>
    <div className="media-body">
      <div className="entry-list-entry-title">
        {entry.name}
      </div>
      {/* <div className="entry-list-entry-detail">
        {entry.snippet.description}
      </div> */}
    </div>
  </div>
);

ItineraryModalEntry.propTypes = {
  entry: PropTypes.shape({
    image_url: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};

export default ItineraryModalEntry;
