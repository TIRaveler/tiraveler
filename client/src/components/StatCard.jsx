import React from 'react';
import { Card, Grid, Header,  Segment} from 'semantic-ui-react';

const StatCard = () => (
  <div style={{ marginTop: '90px', marginRight: '50px', marginLeft: '50px' }}>
    <Card.Group itemsPerRow={2}>
      <Card image="https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1600&h=900&fit=crop&ixid=eyJhcHBfaWQiOjF9&s=e30f5e41f01b4c962e09ac8eb6adc3c5"/>
      <Card image="https://images.unsplash.com/photo-1461319805560-d7d182e9fbbf?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1600&h=900&fit=crop&ixid=eyJhcHBfaWQiOjF9&s=34135addfb7acacd693b07a36e6b9610" />
    </Card.Group>

    <Segment style={{ padding: '0em' }} vertical>
      <Grid celled='internally' columns='equal' stackable>
        <Grid.Row textAlign='center'>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              "Fun adventure!"

            </Header>
            <p style={{ fontSize: '1.33em' }}>Our Hawaii trip was absolutely amazing! The turtle canyon snorkel cruise recommended by TIRavler was perfect! We saw some turtles, rays, colorful fishes and even dolphins which was just stunning! Will travel with TIRavler again!
            </p>
            <b>Jen</b><p>Pennsylvania</p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              "A Dream Trip Starts with TIRaveler!"
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              Everything about the Italy trip was suberb! The food, the restraunts and the romance venice boat trip were wonderful! Great recommendatons! Thank you TIRaveler!
            </p>
            <b>Kenny</b><p>San Diego</p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  </div>
);

export default StatCard;

