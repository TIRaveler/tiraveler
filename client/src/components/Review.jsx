import $ from 'jquery';
import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button, Modal, Item } from 'semantic-ui-react';
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

  // handleContextRef(contextRef) { this.setState({ contextRef }); }

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
   * @param {Object} history Browser history for re-directing
   */
  finalize(history) {
    // Get prop values
    const { entries, log } = this.props;

    // Get state values
    const { itin } = this.state;
    // Save itinerary
    if (entries.length === 0) {
      log('You have no events in your itinerary!');
    } else {
      $.post('/itinerary/save', {
        itin,
        events: entries,
      })
        .then((response) => {
          log(response);
          this.close();
          history.push('/myItineraries');
        })
        .catch(error => log(error, 'problem sending itinerary'));
    }
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
          <Button attached="bottom" onClick={this.open}>
            Review
          </Button>
        )}
        open={isOpen}
        onClose={this.close}
        // basic
      >
        <Modal.Header>
          Please Review Your Epic Itinerary
          <Route render={({ history }) => (
            <Button
              primary
              onClick={() => {
                this.finalize(history);
              }
            }
              floated="right"
            >
              SUBMIT ITINERARY!
            </Button>
          )}
          />
          <Button onClick={this.close} floated="right">
              EDIT ITINERARY
          </Button>
        </Modal.Header>
        <Modal.Content scrolling>
          <Item.Group>
            {
              entries.map(entry => <ItineraryEntry key={entry.name} event={entry} />)
            }
          </Item.Group>
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
  log: PropTypes.func.isRequired,
};

export default Review;
