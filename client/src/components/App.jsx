import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import $ from 'jquery';
import Main from './Main';
import Search from './Search';
import Photos from './Photos';
import Events from './Events';
import Itinerary from './Itinerary';

/**
 * TIRavler travel app
 */
class App extends React.Component {
  constructor(props) {
    super(props);

    // Set state
    this.state = {
      budget: 0,
      events: [],
      location: '',
      pictures: [],
      name: '',
    };

    // Events
    this.sendSelectedPhotos = this.sendSelectedPhotos.bind(this);
    this.displayUsername = this.displayUsername.bind(this);
  }

  /**
   * Closure to edit state
   * @param {*} key State element to alter
   */
  superFunction(key) {
    return (event) => {
      this.setState({ [key]: event.target.value });
    };
  }

  /**
   * Post selected photos to server
   * Sets events state to result
   */
  sendSelectedPhotos() {
    const { location, pictures } = this.state;
    const selectedPics = pictures.filter(pic => pic.isSelected);

    $.ajax({
      url: '/events/search',

      data: {
        location,
        pictures: selectedPics,
      },
      type: 'POST',
      error: (xhr, status, err) => {
        console.error(err);
      },
      success: (data) => {
        this.setState({
          events: data,
        });
      },
    });
  }

  /**
   * Display a logged in username
   */
  displayUsername(name) {
    this.setState({
      name: name,
    });
  }

  render() {
    const {
      budget,
      events,
      name,
      location,
      pictures,
    } = this.state;

    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <Main
                {...props}
                name={name}
                displayUsername={this.displayUsername}
              />)}
          />
          <Route
            exact
            path="/search"
            render={props => (
              <Search
                {...props}
                handleBudget={this.superFunction('budget')}
                handleLocation={this.superFunction('location')}
                appState={this.state}
                name={name}
              />)}
          />
          <Route
            exact
            path="/photos"
            render={props => (
              <Photos
                {...props}
                location={location}
                pictures={pictures}
                setPictures={this.superFunction('pictures')}
                sendSelectedPhotos={this.sendSelectedPhotos}
              />)}
          />
          <Route path="/events" exact render={props => <Events {...props} budged={budget} events={events} setEvents={this.superFunction('events')} />} />
          <Route path="/myItineraries" exact render={props => <Itinerary {...props} />} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
