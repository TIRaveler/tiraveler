import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class LoggedInNav extends React.Component {
  logoutUser() {
    axios.get('/user/logout')
      .then(() => {
        console.log('history props: ', this.props.history);
        this.props.history.push('/');
      });
  }

  render() {
    return (
      <div className="ui top fixed menu secondary pointing menu" style={{ background: 'white' }}>
        <div className="item">
          <div style={{ fontFamily: 'Baloo Bhaijaan', fontSize: '30px' }}>
          TIRaveler
            {' '}
            <img src="https://purepng.com/public/uploads/large/purepng.com-paper-planepaper-planeaeroplanepaper-gliderpaper-dartaircraftfolded-paperpaperboardclipart-1421526589497gsu4z.png" style={{ width: '27px', height: '27px' }} />
          </div>
        </div>
        <div className="right menu">
          <div className="item">
            <button type="button" className="ui basic button" onClick={this.logoutUser.bind(this)}>
              Logout
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(LoggedInNav);
