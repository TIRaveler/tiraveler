import $ from 'jquery';
import React from 'react';
import {
  Button, Input, Form, Container, Grid,
} from 'semantic-ui-react';
import { Route } from 'react-router-dom';

const searchService = ({ location, budget }) => {
  $.post('/photos/search', {
    price: budget, location,
  })
    .catch((error) => {
      console.log(error, 'problem submitting search');
    });
};

const Search = ({ handleBudget, handleLocation, appState }) => (
  <div className="ui twelve column centered grid">
    <div className="three column centered row">
Hello Sam!
    </div>
    <div className="four column centered row">
Where would you like to go?
    </div>
    <Container>
      <Grid>
        <Form>
          <Form.Group>
            <Input placeholder="Paradise..." onChange={handleLocation} />
          </Form.Group>
          <Form.Group widths="equal">
            <span>
What is your budget?  $
            </span>
            <Input onChange={handleBudget} />
          </Form.Group>
        </Form>
      </Grid>
    </Container>
    <div className="row">
      <Route render={({ history }) => (
        <Button
          color="blue"
          onClick={() => {
            history.push('/photos');
            searchService(appState);
          }}
        >
          GO
        </Button>
      )}
      />
    </div>
  </div>
);

export default Search;
