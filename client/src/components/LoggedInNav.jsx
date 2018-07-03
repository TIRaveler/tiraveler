import React from 'react';

const logoutBtn = <button type="button" className="ui basic button">Logout</button>;
const LoggedInNav = () => (
  <div className="ui top fixed menu secondary pointing menu" style={{ background: 'white' }}>
    <div className="item">
      <img className="ui small image" src="https://image.ibb.co/hYsNrd/Screen_Shot_2018_06_29_at_6_06_38_PM.png" alt="logo" />
    </div>
    <div className="right menu">
      <div className="item" style={{ marginBottom: '10px' }}>
        {logoutBtn}
      </div>
    </div>
  </div>
);

export default LoggedInNav;
