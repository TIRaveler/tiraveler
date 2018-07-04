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
import Finalized from './Finalized';
import Itinerary from './Itinerary';

/**
 * TIRavler travel app
 */
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false,
      budget: 0,
      location: '',
      pictures: [],
    };
    this.postSelectedTags = this.postSelectedTags.bind(this);
    this.twitterLogin = this.twitterLogin.bind(this);
  }

  superFunction(key) {
    return (event) => {
      console.log(event);
      this.setState({ [key]: event.target.value });
    };
  }

  /**
   * Post selected photos to server
   * Sets events state to result
   */
  postSelectedTags() {
    const { location, pictures } = this.state;
    const selectedPics= pictures.filter(pic => pic.isSelected);
    console.log('selectedPics', selectedPics);
    $.ajax({
      url: '/events/search',

      data: {
        location,
        'pictures':selectedPics,
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
    const { events, pictures, isAuthenticated } = this.state;
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
                location={this.state.location}
                pictures={pictures}
                setPictures={this.superFunction('pictures')}
                sendSelectedPhotos={this.postSelectedTags}
              />)}
          />
          <Route path="/events" exact render={props => <Events {...props} events={events} setEvents={this.superFunction('events')} />} />
          <Route path="/review" exact render={props => <Review {...props} />} />
          <Route path="/finalized" exact render={props => <Finalized {...props} />} />
          <Route path="/myItineraries" exact render={props => <Itinerary {...props} />} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
