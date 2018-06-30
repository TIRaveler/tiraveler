import React from 'react';
import { Header, Modal } from 'semantic-ui-react';
import Login from './Login.jsx';

const GetStarted = ({ signin }) => (
  <Modal 
    style={{ margin: '30px', height: '400px', width: '400px' }}
    trigger={signin}
    closeIcon
  >
    <Header icon='sign in' content='Sign In' />
    <Modal.Content>
      <Login />
    </Modal.Content>
  </Modal>
);

export default GetStarted;
