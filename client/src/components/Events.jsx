import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Card,
  Header,
  Icon,
  Image,
} from 'semantic-ui-react';

// Displays and indivisual event
// name: Name of the event
// description: Description of the event
// imageSrc: URL source of the image
const Event = ({ name, description, imageSrc }) => (
  <Card>
    <Image medium src={imageSrc} />
    <Card.Content>
      <Card.Header>
        {name}
      </Card.Header>
      <Card.Description>
        {description}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <Button positive>
        <Icon name="thumbs up" />
        Like
      </Button>
      <Button negative>
        <Icon name="thumbs down" />
        Dislike
      </Button>
    </Card.Content>
  </Card>
);

Event.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageSrc: PropTypes.string,
};

Event.defaultProps = {
  imageSrc: '',
};

// Displays all events for user to check
// events: array of all events (See propTypes)
// setEvents: function to set events state
const Events = ({ events, setEvents }) => (
  <React.Fragment>
    <Header>
      Select an Event
    </Header>
    {
      events.map((event, index) => (
        <Event key={event.name} index={index} {...event} />
      ))
    }
  </React.Fragment>
);

Events.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  setEvents: PropTypes.func.isRequired,
};

export default Events;
