import React from 'react';
import { Segment } from 'semantic-ui-react';

const Time = () => (
  <div>
    <Segment padded>
      <Segment.Group>
        <Segment textAlign="center" size="massive">
          Time
        </Segment>
        <Segment.Group horizontal>
          <Segment textAlign="center" size="massive">
            Spring
          </Segment>
          <Segment textAlign="center" size="massive">
            Summer
          </Segment>
          <Segment textAlign="center" size="massive">
            Fall
          </Segment>
          <Segment textAlign="center" size="massive">
            Winter
          </Segment>
          <Segment textAlign="center" size="massive">
            Any
          </Segment>
        </Segment.Group>
      </Segment.Group>
    </Segment>
  </div>
);

export default Time;
