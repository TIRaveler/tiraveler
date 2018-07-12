import React from 'react';
import PropTypes from 'prop-types';
import { Popup, Dropdown, Menu } from 'semantic-ui-react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import GetStarted from './GetStarted';

const signinBtn = (
  <button type="button" className="ui basic button">
    Sign In
  </button>
);

const logoutUser = () => {
  axios.get('/user/logout')
    .then(() => {
      this.props.history.push('/');
    })
    .catch((err) => {
      console.log(err);
    });
};

const options = {
  key: 1,
  text: <a href="/" onClick={logoutUser.bind(this)}>
Logout
        </a>,
  value: 1,
};

const Navbar = ({
  name,
  displayUsername,
  popUpMessage,
  log,
}) => (
  <div className={`ui ${name ? '' : 'top fixed'} secondary pointing menu`} style={{ background: 'white' }}>
    <div className="item">
      <Route
        render={({ history }) => (
          <div
            role="presentation"
            style={{ fontFamily: 'Baloo Bhaijaan', fontSize: '30px' }}
            onClick={() => history.push('/')}
          >
            TIRaveler
            <img
              alt="home"
              src="https://purepng.com/public/uploads/large/purepng.com-paper-planepaper-planeaeroplanepaper-gliderpaper-dartaircraftfolded-paperpaperboardclipart-1421526589497gsu4z.png"
              style={{ width: '27px', height: '27px' }}
            />
          </div>
        )}
      />
    </div>
    <Popup open={Boolean(popUpMessage)} trigger={<p />} content={popUpMessage} position="bottom right" />
    <div className="right menu">
      <div className="item">
        <Route
          render={({ history }) => (
            <button type="button" className="mini ui basic button" onClick={() => history.push('/myItineraries')}>
              My Itineraries
            </button>
          )}
        />
      </div>
      <div className="right menu">
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
            <Menu.Menu position="right">
              <Dropdown item simple text={name} direction="right" options={options} />
            </Menu.Menu>
          ) : (
            <GetStarted
              signin={signinBtn}
              name={name}
              displayUsername={displayUsername}
              log={log}
            />
          )
        }
        </div>
      </div>
    </div>
  </div>
);

Navbar.propTypes = {
  name: PropTypes.string.isRequired,
  displayUsername: PropTypes.func.isRequired,
  popUpMessage: PropTypes.string,
  log: PropTypes.func.isRequired,
};

Navbar.defaultProps = {
  popUpMessage: '',
};

export default Navbar;
