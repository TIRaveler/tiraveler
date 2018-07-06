import $ from 'jquery';
import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal } from 'semantic-ui-react';
import ItineraryEntry from './ItineryEntry';


class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.finalize = this.finalize.bind(this);
  }

  open() {
    this.setState({
      isOpen: true,
    });
  }

  close() {
    this.setState({
      isOpen: false,
    });
  }

  finalize() {
    $.post('/itinerary/save', {
      itin: { name: 'sampleName' },
      events: [{
        name: 'eventName1',
        location: 'here',
        yelplink: 'yelpdotcom',
        tags: 'tagtagtag',
        price: 100.00,
        photoUrl: 'photoUrl',
      }, {
        name: 'eventName2',
        location: 'there',
        yelplink: 'yelpdotcom',
        tags: 'tagtagtag',
        price: 200.00,
        photoUrl: 'photoUrl',
      }],
    })
      .then(response => console.log(response))
      .catch(error => console.log(error, 'problem sending itinerary'));
    this.close();
  }

  render() {
    const { entries } = this.props;
    const { isOpen } = this.state;

    return (
      <Modal
        trigger={(
          <Button onClick={this.open}>
            Review
          </Button>
        )}
        open={isOpen}
        onClose={this.close}
        basic
      >
        <Modal.Header>
          Please Review Your Epic Itinerary
        </Modal.Header>
        <Modal.Content>
          <div>
            {
              entries.map(entry => <ItineraryEntry key={entry.name} entry={entry} />)
            }
          </div>
          <Button onClick={this.close}>
            EDIT ITINERARY
          </Button>
          <Button onClick={this.finalize}>
            FINALIZE!
          </Button>
        </Modal.Content>
      </Modal>
    );
  }
}

Review.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    image_url: PropTypes.string,
  })).isRequired,
};

export default Review;
