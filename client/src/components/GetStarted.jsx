import React from 'react';
import PropTypes from 'prop-types';
import { Header, Modal } from 'semantic-ui-react';
import Login from './Login';

const GetStarted = ({ signin, name, displayUsername }) => (
  <Modal
    style={{ margin: '30px', height: '400px', width: '400px' }}
    trigger={signin}
    closeIcon
  >
    <Header icon="sign in" content="Sign In" />
    <Modal.Content>
      <Login username={name} displayUsername={displayUsername} />
    </Modal.Content>
  </Modal>
);

GetStarted.propTypes = {
  name: PropTypes.string.isRequired,
  displayUsername: PropTypes.func.isRequired,
};

export default GetStarted;
