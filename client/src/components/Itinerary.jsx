import React from 'react';
import PropTypes from 'prop-types';
import { Container, Header, Item } from 'semantic-ui-react';
import Axios from 'axios';

import ItineraryModalEntry from './ItineraryModalEntry';

class Itinerary extends React.Component {
  componentDidMount() {
    Axios.get('/user/itineraries')
      .then((res) => {
        const { setEntries } = this.props;
        setEntries({ target: { value: res.data } });
      });
  }

  render() {
    const { entries } = this.props;
    return (
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
  }
}

Itinerary.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    image_url: PropTypes.string,
  })).isRequired,
  setEntries: PropTypes.func.isRequired,
};

export default Itinerary;
