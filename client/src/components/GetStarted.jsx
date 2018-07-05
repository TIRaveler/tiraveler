import React from 'react';
import PropTypes from 'prop-types';
import { Header, Modal } from 'semantic-ui-react';
import Login from './Login';

const GetStarted = ({ signin, twitterLogin }) => (
  <Modal
    style={{ margin: '30px', height: '400px', width: '400px' }}
    trigger={signin}
    closeIcon
  >
    <Header icon="sign in" content="Sign In" />
    <Modal.Content>
      <Login twitterLogin={twitterLogin} />
    </Modal.Content>
  </Modal>
);

GetStarted.propTypes = {
  signin: PropTypes.func.isRequired,
  twitterLogin: PropTypes.func.isRequired,
};

export default GetStarted;
