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
          <img className="ui small image" src="https://image.ibb.co/hYsNrd/Screen_Shot_2018_06_29_at_6_06_38_PM.png" alt="logo" />
        </div>
        <div className="right menu">
          <div className="item" style={{ marginBottom: '10px' }}>
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
