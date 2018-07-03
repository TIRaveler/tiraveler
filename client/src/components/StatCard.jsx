import React from 'react';
import { Card } from 'semantic-ui-react';

const src = 'https://react.semantic-ui.com/images/wireframe/white-image.png';
const StatCard = () => (
  <div style={{ marginTop: '90px', marginRight: '50px', marginLeft: '50px' }}>
    <Card.Group itemsPerRow={2}>
      <Card color="red" image={src} />
      <Card color="teal" image={src} />
    </Card.Group>
  </div>
);

export default StatCard;
