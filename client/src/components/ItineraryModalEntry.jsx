import React from 'react';
import PropTypes from 'prop-types';
import { Item } from 'semantic-ui-react';
import ItineraryModal from './ItineraryModal';

const ItineraryModalEntry = ({ entry }) => (
  <Item>
    <Item.Content>
      <Item.Header>
        {entry.name}
      </Item.Header>
      <Item.Description>
        <ItineraryModal events={entry.events} name={entry.name} />
      </Item.Description>
    </Item.Content>
  </Item>
);

ItineraryModalEntry.propTypes = {
  entry: PropTypes.shape({
    image_url: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};

export default ItineraryModalEntry;
