import $ from 'jquery';
import React from 'react';
import {
  Button, Divider, Input, Header, Container, Grid,
} from 'semantic-ui-react';
import { Route } from 'react-router-dom';
import LoggedInNav from './LoggedInNav.jsx';

const styles = {
  bordered: {
    paddingTop: '11px',
  },
  all: {
    paddingTop: '80px',
  },
};

const searchService = ({ location, budget }) => {
  // $.post('/photos/search', {
  //   price: budget, location,
  // })
  //   .catch((error) => {
  //     console.log(error, 'problem submitting search');
  //   });
};

const Search = ({ handleBudget, handleLocation, appState }) => (
  <div>
    <LoggedInNav />
    <div className="ui equal width center aligned padded grid" style={styles.all}>
      <div className="ui twelve column centered grid">
        <div className="row">
          <Header size="large">
            <Divider horizontal>
            Hello Sam!
            </Divider>
          </Header>
        </div>
        <div className="six column centered row">
          <Header size="huge">
          Where would you like to go?
          </Header>
        </div>
        <Container>
          <Grid>
            <div className="eight column centered row">
              <Input fluid size="huge" placeholder="Paradise..." onChange={handleLocation} />
            </div>
            <div className="equal width row">
              <div className="column">
                <Header size="medium" floated="right" style={styles.bordered}>
                What is your budget?
                </Header>
              </div>
              <div className="column">
                <Input fluid size="big" onChange={handleBudget} icon="dollar sign" iconPosition="left" />
              </div>
            </div>
          </Grid>
        </Container>
        <div className="row">
          <Route render={({ history }) => (
            <Button
              fluid
              size="huge"
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
    </div>
  </div>
);

export default Search;
