import React from 'react';
import PropTypes from 'prop-types';
import {
  Button, Divider, Input, Header, Container, Grid,
} from 'semantic-ui-react';
import { Route } from 'react-router-dom';
import LoggedInNav from './LoggedInNav';

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

/**
 * Convert budget to number and update
 * @param {*}      event              Calling event
 * @param {*}      event.target       Calling object
 * @param {string} event.target.value Budget value
 * @param {*}      callback           Function to update budget state
 */
const convertBudgetToNumberAndUpdate = (event, callback) => {
  const numberEvent = Object.assign({}, event);
  numberEvent.target.value = Number(event.target.value);
  callback(numberEvent);
};

/**
 * Search For events in area and budget
 * @param {{handleBudget: {*}, handleLocation: {*}, appState: {*}}}
 */
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
              <Input id="input-location" fluid size="huge" placeholder="Paradise..." onChange={handleLocation} />
            </div>
            <div className="equal width row">
              <div className="column">
                <Header size="medium" floated="right" style={styles.bordered}>
                What is your budget?
                </Header>
              </div>
              <div className="column">
                <Input
                  id="input-budget"
                  type="number"
                  fluid
                  size="big"
                  onChange={e => convertBudgetToNumberAndUpdate(e, handleBudget)}
                  icon="dollar sign"
                  iconPosition="left"
                />
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

Search.propTypes = {
  /**
   * Current app state
   * @prop {number} budget Current budget
   * @prop {string} location Current location
   */
  appState: PropTypes.shape({
    budget: PropTypes.number.isRequired,
    location: PropTypes.string.isRequired,
  }).isRequired,

  /**
   * Update budget information
   * @param {{target: {value: {number}}}} event Event object
   */
  handleBudget: PropTypes.func.isRequired,

  /**
   * Update location information
   * @param {{target: {value: {string}}}} event Event object
   */
  handleLocation: PropTypes.func.isRequired,
};

export default Search;
