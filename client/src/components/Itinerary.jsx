import React from 'react';
import PropTypes from 'prop-types';
import { Container, Header, Item } from 'semantic-ui-react';
import { Parallax } from 'react-parallax';
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

/** Render My Itineraries from ItineraryModalEntry */
  render() {
    const { entries } = this.props;
    return (
      <div style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1515888368305-5a7eba31b4e3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1600&h=900&fit=crop&ixid=eyJhcHBfaWQiOjF9&s=e715091889b2723e452d5b8fc860e4db")',height: '800px'}}>
        <Header as="h1" textAlign="center">
         My Itineraries
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
