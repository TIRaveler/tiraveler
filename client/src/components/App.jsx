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
      location: ''
    }
    this.postSelectedTags=this.postSelectedTags.bind(this);
  }

  superFunction(key) {
    return (event) => {
      this.setState({[key]: event.target.value});
    };
  }

 //  superFunction(key) {
 //   return (event) => {
 //     this.setState({ [key]: event.target.value });
 //     console.log('supperFunction is called!')
 //   };
 // }

  postSelectedTags(event){
    this.setState ({selectedPhotos:event.target.value});
    $.ajax({
          url:`/events/search`,
          data: JSON.stringify(event.target.value),
          type:"POST",
          error: function(xhr,status,err){
            console.error(err);
          },
          success: function(data){
            console.log('Data posted', data);
          }
    })
  }



  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={props => <Main />} />
          <Route exact path="/login" render={props => <Login />} />
          <Route exact path="/search" render={(props) => <Search handleBudget={this.superFunction('budget')} handleLocation={this.superFunction('location')} appState={this.state}/>} />
          <Route exact path="/time" render={props => <Time />} />
          <Route exact path="/photos" render={props => <Photos sendSelectedPhotos={this.postSelectedTags}/>} />
          <Route exact path="/events" render={props => <Events />} />
          <Route exact path="/review" render={props => <Review />} />
          <Route exact path="/finalized" render={props => <Finalized />} />
          <Route exact path="/myItineraries" render={props => <Itinerary />} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
