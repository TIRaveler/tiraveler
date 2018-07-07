import React from 'react';
import PropTypes from 'prop-types';
import { Parallax } from 'react-parallax';
import { Button } from 'semantic-ui-react';
import Navbar from './Navbar';
import StatCard from './StatCard';
import AboutUs from './AboutUs';
import GetStarted from './GetStarted';

const signInBtn = (
  <Button primary size="massive">
Get Started
  </Button>
);
const Main = ({ name, displayUsername }) => (
  <div>
    <Navbar name={name} displayUsername={displayUsername} />
    <Parallax
      bgImage="https://image.ibb.co/nN3bjy/adult_book_business_297755_1.jpg"
      bgImageAlt="welcome"
      strength={200}
    >
      <div style={{ height: '550px' }} />
      <div className="ui center aligned segment" style={{ background: 'transparent', border: 'none', paddingBottom: '70px' }}>
        <GetStarted signin={signInBtn} name={name} displayUsername={displayUsername} />
      </div>
    </Parallax>
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage="https://images.pexels.com/photos/872958/pexels-photo-872958.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      bgImageAlt="stats"
      strength={400}
    >
      <StatCard />
      Stats about our product
      <div style={{ height: '400px' }} />
    </Parallax>

    <Parallax
      blur={{ min: -15, max: 5 }}
      bgImage="https://image.ibb.co/mxqW1d/blur_business_card_185933.jpg"
      bgImageAlt="about-us"
      strength={200}
    >
      <AboutUs />
      <div style={{ height: '500px' }} />
    </Parallax>
  </div>
);

Main.propTypes = {
  name: PropTypes.string.isRequired,
  displayUsername: PropTypes.func.isRequired,
};

export default Main;
