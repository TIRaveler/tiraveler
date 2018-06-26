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
      pictures: []
    }
    this.postSelectedTags=this.postSelectedTags.bind(this);
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
          <Route path="/" exact render={props => <Main />} />
          <Route path="/login" exact render={props => <Login />} />
          <Route path="/search" exact render={props => <Search />} />
          <Route path="/time" exact render={props => <Time />} />
          <Route path="/photos" exact render={props => <Photos sendSelectedPhotos={this.postSelectedTags}/>} />
          <Route path="/events" exact render={props => <Events />} />
          <Route path="/review" exact render={props => <Review />} />
          <Route path="/finalized" exact render={props => <Finalized />} />
          <Route path="/myItineraries" exact render={props => <Itinerary />} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
