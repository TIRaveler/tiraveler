import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './Main';
import Login from './Login';
import Search from './Search';
import Time from './Time';
import Photos from './Photos';
import Events from './Events';
import Review from './Review';
import Finalized from './Finalized';
import Itinerary from './Itinerary';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPhotos: [],
      pictures: [],
      budget: 0,
      location: '',
      events: [{
        name: 'Beach Island Resort',
        description: 'Relaxation starts here',
        src: 'https://images.unsplash.com/photo-1529058904714-78f84a77cce4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5017992a445fa402226767146f267e8d&auto=format&fit=crop&w=1350&q=80',
      }],
    };
    this.postSelectedTags = this.postSelectedTags.bind(this);
  }

  superFunction(key) {
    return (event) => {
      this.setState({ [key]: event.target.value });
    };
  }

  //   return (event) => {
  //     this.setState({ [key]: event.target.value });
  //     console.log('supperFunction is called!')

  postSelectedTags(event) {
    this.setState({ selectedPhotos: event.target.value });
    $.ajax({
      url: '/events/search',
      data: JSON.stringify(event.target.value),
      type: 'POST',
      error: (xhr, status, err) => {
        console.error(err);
      },
      success: (data) => {
        console.log('Data posted', data);
      },
    });
  }

  render() {
    const { events } = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={props => <Main {...props} />} />
          <Route exact path="/login" render={props => <Login {...props} />} />
          <Route
            exact
            path="/search"
            render={props => (
              <Search
                {...props}
                handleBudget={this.superFunction('budget')}
                handleLocation={this.superFunction('location')}
                appState={this.state}
              />)}
          />
          <Route exact path="/time" render={props => <Time {...props} />} />
          <Route exact path="/photos" render={props => <Photos {...props} sendSelectedPhotos={this.postSelectedTags} />} />
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
