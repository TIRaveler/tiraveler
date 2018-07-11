import React from 'react';
import PropTypes from 'prop-types';
import { Popup } from 'semantic-ui-react';
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
          <div style={{ fontFamily: 'Baloo Bhaijaan', fontSize: '30px' }}>
          TIRaveler
          <img
            alt="home"
            className="ui small image"
            onClick={() => history.push('/')}
            role="presentation"
            src="https://purepng.com/public/uploads/large/purepng.com-paper-planepaper-planeaeroplanepaper-gliderpaper-dartaircraftfolded-paperpaperboardclipart-1421526589497gsu4z.png" style={{ width: '27px', height: '27px' }}/>
          </div>
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
    <Popup open={Boolean(popUpMessage)} trigger={<p />} content={popUpMessage} position="bottom right" />
    <div className="right menu">
      <div className="item">
        <GetStarted
          signin={signinBtn}
          name={name}
          displayUsername={displayUsername}
          setItineraries={setItineraries}
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
