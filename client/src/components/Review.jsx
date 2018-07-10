import $ from 'jquery';
import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal } from 'semantic-ui-react';
import ItineraryEntry from './ItineraryEntry';


class Review extends React.Component {
  /**
   * Create new Review button and associated modal
   * @param {Object} props Review properties
   * @param {Object} props.entries Current itinerary entries
   */
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      itin: {
        name: `${props.place} trip`,
      },
    };
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.finalize = this.finalize.bind(this);
  }

  /**
   * Open review modal
   */
  open() {
    this.setState({
      isOpen: true,
    });
  }

  /**
   * Close review modal
   */
  close() {
    this.setState({
      isOpen: false,
    });
  }

  /**
   * Save itinerary
   */
  finalize() {
    // Get prop values
    const { entries } = this.props;

    // Get state values
    const { itin } = this.state;
    // Save itinerary
    if (entries.length === 0) {
      alert('You have no events in your itinerary!');
    } else {
      $.post('/itinerary/save', {
        itin,
        events: entries,
      })
        .then(response => console.log('Saved!'))
        .catch(error => console.log(error, 'problem sending itinerary'));
    }
    this.close();
  }

  /**
   * Render review button and pop-up
   */
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
              entries.map(entry => <ItineraryEntry key={entry.name} event={entry} />)
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
  place: PropTypes.string.isRequired,
};

export default Review;
