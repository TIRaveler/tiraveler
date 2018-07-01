import React from 'react';
import GetStarted from './GetStarted.jsx';

const signinBtn = (
  <button type="button" className="ui basic button">
Sign In
  </button>
);
const Navbar = () => (
  <div className="ui top fixed menu secondary pointing menu" style={{ background: 'white' }}>
    <div className="item">
      <img className="ui small image" src="https://image.ibb.co/hYsNrd/Screen_Shot_2018_06_29_at_6_06_38_PM.png" alt="logo" />
    </div>
    <div className="right menu">
      <div className="item" style={{ marginBottom: '10px' }}>
        <GetStarted signin={signinBtn} />
      </div>
    </div>
  </div>
);

export default Navbar;
