import React from 'react';
import PropTypes from 'prop-types';
import { Popup, Button } from 'semantic-ui-react';
import { Route } from 'react-router-dom';
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
  <div className={`ui ${name ? '' : 'top fixed'} secondary pointing menu`} style={{ background: 'white' }}>
    <div className="item">
      <Route
        render={({ history }) => (
          <img
            alt="home"
            className="ui small image"
            onClick={() => history.push('/')}
            role="presentation"
            src="https://image.ibb.co/hYsNrd/Screen_Shot_2018_06_29_at_6_06_38_PM.png"
          />
        )}
      />
    </div>
    <Popup open={Boolean(popUpMessage)} trigger={<p />} content={popUpMessage} position="bottom right" />
    <div className="right menu" style={{ marginBottom: '10px' }}>
      <div className="item">
        <Route
          render={({ history }) => (
            <button type="button" className="mini ui basic button" onClick={() => history.push('/myItineraries')}>
              My Itineraries
            </button>
          )}
        />
      </div>
      <div className="item">
        <Route
          render={({ history }) => (
            <button type="button" className="mini ui basic button" onClick={() => history.push('/search')}>
              Search
            </button>
          )}
        />
      </div>
      <div className="item">
        {
          name ? (
            `Hello ${name}`
          ) : (
            <GetStarted
              signin={signinBtn}
              name={name}
              displayUsername={displayUsername}
              setItineraries={setItineraries}
            />
          )
        }
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
