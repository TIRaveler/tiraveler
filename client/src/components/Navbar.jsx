import React from 'react';
import PropTypes from 'prop-types';
import { Popup } from 'semantic-ui-react';
import GetStarted from './GetStarted';

const signinBtn = (
  <button type="button" className="ui basic button">
Sign In
  </button>
);

const Navbar = ({
  name,
  displayUsername,
  popUpMessage,
  setItineraries,
}) => (
  <div className="ui top fixed menu secondary pointing menu" style={{ background: 'white' }}>
    <div className="item">
      <img className="ui small image" src="https://image.ibb.co/hYsNrd/Screen_Shot_2018_06_29_at_6_06_38_PM.png" alt="logo" />
    </div>
    <Popup open={Boolean(popUpMessage)} trigger={<p />} content={popUpMessage} position="bottom right" />
    <div className="right menu">
      <div className="item" style={{ marginBottom: '10px' }}>
        <GetStarted
          signin={signinBtn}
          name={name}
          displayUsername={displayUsername}
          setItineraries={setItineraries}
        />
      </div>
    </div>
  </div>
);

Navbar.propTypes = {
  name: PropTypes.string.isRequired,
  displayUsername: PropTypes.func.isRequired,
  popUpMessage: PropTypes.string,
  setItineraries: PropTypes.func.isRequired,
};

Navbar.defaultProps = {
  popUpMessage: '',
};

export default Navbar;
