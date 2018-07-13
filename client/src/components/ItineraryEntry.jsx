import React from 'react';
import PropTypes from 'prop-types';
import { Item } from 'semantic-ui-react';

const ItineraryEntry = ({ event }) => (
  <Item>
    <Item.Image size="small" src={event.image_url} />
    <Item.Content>
      <Item.Header as="a">
        {event.name}
      </Item.Header>
      <Item.Description>
        <p>
          Price:
          {event.price ? event.price : 'Free or N/A'}
        </p>
        <p>
          Rating:
          {event.rating}
        </p>
        <p>
          {event.address ? event.address : ' '}
        </p>
      </Item.Description>
    </Item.Content>
  </Item>
);

ItineraryEntry.propTypes = {
  event: PropTypes.shape({
    image_url: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};

export default ItineraryEntry;
