import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal } from 'semantic-ui-react';
import ItineraryModalEntry from './ItineraryModalEntry';


class ItineraryModal extends React.Component {
  /**
   * Create new ItineraryModal button and associated modal
   * @param {Object} props ItineraryModal properties
   * @param {Object} props.entries Current itinerary entries
   */
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }

  /**
   * Open ItineraryModal modal
   */
  open() {
    this.setState({
      isOpen: true,
    });
  }

  /**
   * Close ItineraryModal modal
   */
  close() {
    this.setState({
      isOpen: false,
    });
  }

  /**
   * Render ItineraryModal button and pop-up
   */
  render() {
    const { entries } = this.props;
    const { isOpen } = this.state;

    return (
      <Modal
        trigger={(
          <Button onClick={this.open}>
            ItineraryModal
          </Button>
        )}
        open={isOpen}
        onClose={this.close}
        basic
      >
        <Modal.Header>
          Please ItineraryModal Your Epic Itinerary
        </Modal.Header>
        <Modal.Content>
          <div>
              <ItineraryModalEntry />
          </div>
          <Button onClick={this.close}>
            Close
          </Button>
        </Modal.Content>
      </Modal>
    );
  }
}

ItineraryModal.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    image_url: PropTypes.string,
  })).isRequired,
};

export default ItineraryModal;

// entries.map(entry =>  key={entry.name} entry={entry}