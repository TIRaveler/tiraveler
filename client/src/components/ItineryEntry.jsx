import React from 'react';

const ItineraryEntry = ({ entry }) => (

  <div className="entry-list-entry media">
    <div className="media-left media-middle">
      <img className="media-object" src={entry.snippet.thumbnails.default.url} alt="" />
    </div>
    <div className="media-body">
      <div className="entry-list-entry-title">
        {entry.snippet.title}
      </div>
      <div className="entry-list-entry-detail">
        {entry.snippet.description}
      </div>
    </div>
  </div>
);


export default ItineraryEntry;
