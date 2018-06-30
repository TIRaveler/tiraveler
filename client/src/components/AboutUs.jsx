import React from 'react';
import { Card } from 'semantic-ui-react';

const teamMembers = [
  {
    header: 'John Webb',
    description: 'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
    meta: 'ROI: 30%',
    image: 'https://image.ibb.co/ho9Ygd/my_Avatar_1.png',
    color: 'purple',
  },
  {
    header: 'Sam Shih',
    description: 'Bring to the table win-win survival strategies to ensure proactive domination.',
    meta: 'ROI: 34%',
    image: 'https://image.ibb.co/gZQaSJ/my_Avatar_2.png',
    color: 'purple',
  },
  {
    header: 'Linda Wang',
    description: 'Bring to the table win-win survival strategies to ensure proactive domination.',
    meta: 'ROI: 34%',
    image: 'https://image.ibb.co/jGBX7J/my_Avatar_3.png',
    color: 'purple',
  },
  {
    header: 'Zack Carlson',
    description: 'Bring to the table win-win survival strategies to ensure proactive domination.',
    meta: 'ROI: 34%',
    image: 'https://image.ibb.co/iuwogd/myAvatar.png',
    color: 'purple',
  },
];

const AboutUs = () => <Card.Group centered items={teamMembers} style={{ marginTop: "300px" }}/>

export default AboutUs;
