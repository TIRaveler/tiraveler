import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import $ from 'jquery';
import Main from './Main';
import Search from './Search';
import Photos from './Photos';
import Events from './Events';
import Itinerary from './Itinerary';
import Navbar from './Navbar';
import Signup from './Signup';

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
      popUpMessages: [],
      name: '',
      itineraries: [],
    };

    // Add popUpMessage update
    this.popUpInterval = 5000; // ms
    this.popupMessageUpdateID = setInterval(() => {
      // Get messages
      const { popUpMessages } = this.state;

      if (popUpMessages.length > 0) {
        // If messages, Remove message
        this.setState({
          popUpMessages: popUpMessages.slice(1),
        });
      }
    }, this.popUpInterval);

    // Events
    this.sendSelectedPhotos = this.sendSelectedPhotos.bind(this);
    this.displayUsername = this.displayUsername.bind(this);
    this.logPopUpMessage = this.logPopUpMessage.bind(this);
  }

  /**
   * Log message as a pop up
   * @param {string} message Message to display
   */
  logPopUpMessage(message) {
    // Get current messages
    const { popUpMessages } = this.state;

    // Add message to end
    popUpMessages.push(message);

    // Update state
    this.setState({
      popUpMessages,
    });
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
  sendSelectedPhotos(history) {
    const { location, pictures } = this.state;
    const selectedPics = pictures.filter(pic => pic.isSelected);
    if (selectedPics.length === 0) {
      this.logPopUpMessage('Please select photos first');
    } else {
      history.push('/events');
      $.ajax({
        url: '/events/search',
        data: {
          location,
          pictures: selectedPics,
        },
        type: 'POST',
        error: (xhr, status, err) => {
          this.logPopUpMessage(`Error: ${err.message}`);
        },
        success: (data) => {
          this.setState({
            events: data,
          });
        },
      });
    }
  }

  /**
   * Display a logged in username
   */
  displayUsername(name) {
    this.setState({
      name,
    });
  }

  render() {
    const {
      budget,
      events,
      name,
      location,
      pictures,
      itineraries,
      popUpMessages,
    } = this.state;

    return (
      <React.Fragment>
        <BrowserRouter>
          <div>
            <Navbar
              name={name}
              displayUsername={this.displayUsername}
              popUpMessage={popUpMessages[0]}
              log={this.logPopUpMessage}
            />

            <Switch>
              <Route
                exact
                path="/"
                render={props => (
                  <Main
                    {...props}
                    name={name}
                    displayUsername={this.displayUsername}
                    log={this.logPopUpMessage}
                  />)}
              />
              <Route
                exact
                path="/signup"
                render={props => (
                  <Signup
                    {...props}
                    name={name}
                    displayUsername={this.displayUsername}
                    log={this.logPopUpMessage}
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
              <Route
                path="/events"
                exact
                render={props => (<Events
                  {...props}
                  budged={budget}
                  events={events}
                  log={this.logPopUpMessage}
                  place={location}
                  setEvents={this.superFunction('events')}
                />
                )}
              />
              <Route
                path="/myItineraries"
                exact
                render={props => (
                  <Itinerary
                    {...props}
                    entries={itineraries}
                    setEntries={this.superFunction('itineraries')}
                  />
                )}
              />
            </Switch>
          </div>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
