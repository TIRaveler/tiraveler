import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import $ from 'jquery';
import axios from 'axios';
import Main from './Main';
// import Login from './Login';
import Search from './Search';
import Time from './Time';
import Photos from './Photos';
import Events from './Events';
import Review from './Review';
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
      isAuthenticated: false,
      location: '',
      pictures: [],
    };

    // Events
    this.sendSelectedPhotos = this.sendSelectedPhotos.bind(this);
    this.twitterLogin = this.twitterLogin.bind(this);
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

  twitterLogin() {
    axios.get('/login/twitter')
      .then(() => {
        this.setState({
          isAuthenticated: true,
        });
      })
      .catch((err) => { console.error(err); });
  }

  render() {
    const {
      budget,
      events,
      isAuthenticated,
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
                twitterLogin={this.twitterLogin}
                isAuthenticated={isAuthenticated}
              />)}
          />
          {/* <Route exact path="/login" render={props => <Login {...props} />} /> */}
          <Route
            exact
            path="/search"
            render={props => (
              <Search
                {...props}
                handleBudget={this.superFunction('budget')}
                handleLocation={this.superFunction('location')}
                appState={this.state}
                isAuthenticated={isAuthenticated}
              />)}
          />
          <Route exact path="/time" render={props => <Time {...props} />} />
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
          <Route path="/review" exact render={props => <Review {...props} entries={this.getLikedEvents()} />} />
          <Route path="/myItineraries" exact render={props => <Itinerary {...props} />} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
