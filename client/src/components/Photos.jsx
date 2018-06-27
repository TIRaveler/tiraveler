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
import { Divider, Image, Card } from 'semantic-ui-react'
import { Checkbox } from 'semantic-ui-react'

class Photos extends Component {
  constructor(){
    super();
    this.state = {
      pictures: [],
    };
  }

componentDidMount(){
  fetch('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=b1088ff6013a6c50850d8846e6814813&tags=San-Fransisco&per_page=20&farm=1&page=1&format=json&nojsoncallback=1')
  .then(function(response){
      return response.json();
    })
  .then(function(j){
      alert(JSON.stringify(j));
      let picArray = j.photos.photo.map((pic) => {
        var srcPath = 'https://farm'+pic.farm+'.staticflickr.com/'+pic.server+'/'+pic.id+'_'+pic.secret+'.jpg';
        var picTitle = pic.title;
        return(

           <div>
              <Image
                  src={srcPath}
                  text= {picTitle}
              />
              <Checkbox label={{ children: 'select' }} />
           </div>

        )
      })
      this.setState({pictures: picArray});
      console.log(picArray);
    }.bind(this))
  }

  render() {
    return (
      <div>
          <h1 class='ui big header'>Select 5 places you want to go! </h1>
          <Image.Group size='medium'>
           {this.state.pictures}
          </Image.Group>
      </div>
    )
  }
}

export default Photos;
