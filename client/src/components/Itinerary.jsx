import React from 'react';
import PropTypes from 'prop-types';
import { Container, Header, Item } from 'semantic-ui-react';
import ItineraryModalEntry from './ItineraryModalEntry';

const Itinerary = ({ entries }) => (
  <div>
    <Header as="h1" textAlign="center">
    Your Itineraries
    </Header>
    <Container text>
      <Item.Group divided>
        {
          entries.map(entry => <ItineraryModalEntry key={entry.name} entry={entry} />)
        }
      </Item.Group>
    </Container>
  </div>
);

Itinerary.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    image_url: PropTypes.string,
  })).isRequired,
};

export default Itinerary;
