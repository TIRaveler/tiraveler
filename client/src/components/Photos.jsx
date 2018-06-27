// import React from 'react';

// const Photos = () => (
//   <div>Photos</div>
// );

// export default Photos;

import React from 'react';
import { Divider, Image } from 'semantic-ui-react'

const src = 'https://source.unsplash.com/1600x900/?flower'

const Photos = () => (
   <div>
    <Image.Group size='medium'>
      <Image src={'https://source.unsplash.com/1600x900/?san fransico exploratorium'} />
      <Image src={'https://source.unsplash.com/1600x900/?san-fransico'} />
      <Image src={'https://source.unsplash.com/1600x900/?san-fransico-night-city'} />
      <Image src={'https://source.unsplash.com/1600x900/?san-fransico-food'} />
    <Divider hidden />
      <Image src={'https://source.unsplash.com/1600x900/?golden-bridge'} />
      <Image src={'https://source.unsplash.com/1600x900/?san-fransico-Palace-of-Fine-Arts'} />
      <Image src={'https://source.unsplash.com/1600x900/?san-fransico-chinatown'} />
      <Image src={'https://source.unsplash.com/1600x900/?san-fransico-bar'} />


    </Image.Group>
  </div>
);

export default Photos;
