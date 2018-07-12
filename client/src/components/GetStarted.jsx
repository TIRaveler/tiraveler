import React from 'react';
import PropTypes from 'prop-types';
import { Header, Modal } from 'semantic-ui-react';
import Login from './Login';

const GetStarted = ({
  displayUsername,
  log,
  name,
  signin,
}) => (
  <Modal
    style={{ margin: '30px', height: '400px', width: '400px' }}
    trigger={signin}
    closeIcon
  >
    <Header icon="sign in" content="Sign In" />
    <Modal.Content>
      <Login username={name} displayUsername={displayUsername} log={log} />
    </Modal.Content>
  </Modal>
);

GetStarted.propTypes = {
  displayUsername: PropTypes.func.isRequired,
  log: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  signin: PropTypes.func.isRequired,
};

export default GetStarted;
