import React from 'react';
import { Container, Header, Item } from 'semantic-ui-react';
import ItineraryModal from './ItineraryModal';

const Itinerary = () => (
  <div>
    <Header as="h1" textAlign="center">
    Your Itineraries
    </Header>
    <Container text>
      <Item.Group divided>
        <Item>
          <Item.Content>
            <Item.Header>
                event.title
            </Item.Header>
            <Item.Meta>
                From object
            </Item.Meta>
            <Item.Description>
                From object
            </Item.Description>
          </Item.Content>
          <ItineraryModal />
        </Item>

        <Item>
          <Item.Content>
            <Item.Header>
                event.title
            </Item.Header>
            <Item.Meta>
                From object
            </Item.Meta>
            <Item.Description>
                From object
            </Item.Description>
          </Item.Content>
          <ItineraryModal />
        </Item>

      </Item.Group>
    </Container>
  </div>
);

export default Itinerary;
