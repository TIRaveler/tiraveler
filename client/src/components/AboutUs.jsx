import React from 'react';
import { Card } from 'semantic-ui-react';

const teamMembers = [
  {
    header: 'John Webb',
    description: '',
    meta: '',
    image: 'https://image.ibb.co/ho9Ygd/my_Avatar_1.png',
    color: 'purple',
  },
  {
    header: 'Sam Shih',
    description: '',
    meta: '',
    image: 'https://image.ibb.co/gZQaSJ/my_Avatar_2.png',
    color: 'purple',
  },
  {
    header: 'Linda Wang',
    description: '',
    meta: '',
    image: 'https://image.ibb.co/jGBX7J/my_Avatar_3.png',
    color: 'purple',
  },
  {
    header: 'Zack Carlson',
    description: '',
    meta: '',
    image: 'https://image.ibb.co/iuwogd/myAvatar.png',
    color: 'purple',
  },
];

const AboutUs = () => <Card.Group centered items={teamMembers} style={{ marginTop: '300px' }} />;

export default AboutUs;
