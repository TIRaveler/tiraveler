// import React from 'react';

// const Photos = () => (
//   <div>Photos</div>
// );

// export default Photos;

// import React from 'react';
// import { Divider, Image } from 'semantic-ui-react'

// const src = 'https://source.unsplash.com/1600x900/?flower'

// const Photos = () => (
//    <div>
//     <Image.Group size='medium'>
//       <Image src={'https://source.unsplash.com/1600x900/?san fransico exploratorium'} />
//       <Image src={'https://source.unsplash.com/1600x900/?san-fransico'} />
//       <Image src={'https://source.unsplash.com/1600x900/?san-fransico-night-city'} />
//       <Image src={'https://source.unsplash.com/1600x900/?san-fransico-food'} />
//     <Divider hidden />
//       <Image src={'https://source.unsplash.com/1600x900/?golden-bridge'} />
//       <Image src={'https://source.unsplash.com/1600x900/?san-fransico-Palace-of-Fine-Arts'} />
//       <Image src={'https://source.unsplash.com/1600x900/?san-fransico-chinatown'} />
//       <Image src={'https://source.unsplash.com/1600x900/?san-fransico-bar'} />


//     </Image.Group>
//   </div>
// );

// export default Photos;

import React, {Component} from 'react';
import { Divider, Image } from 'semantic-ui-react'
//import logo from './logo.svg';

class Photos extends Component {
  constructor(){
    super();
    this.state = {
      pictures: [],
    };
  }

componentDidMount(){
  fetch('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=b1088ff6013a6c50850d8846e6814813&tags=nyc&per_page=10&page=1&format=json&nojsoncallback=1')
  .then(function(response){
      return response.json();
    })
  .then(function(j){
      alert(JSON.stringify(j));
      let picArray = j.photos.photo.map((pic) => {

        var srcPath = 'https://farm'+pic.farm+'.staticflickr.com/'+pic.server+'/'+pic.id+'_'+pic.secret+'.jpg';
        return(
          <img alt="dogs" src={srcPath}></img>
        )
      })
      this.setState({pictures: picArray});
    }.bind(this))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">

          <h1 className="App-title">Choose 4 places you want to go</h1>
        </header>
        <p className="App-intro">
          {this.state.pictures}
        </p>
      </div>
    );
  }

}

export default Photos;
