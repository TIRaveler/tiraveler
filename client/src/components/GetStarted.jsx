import React from 'react';
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

export default GetStarted;
