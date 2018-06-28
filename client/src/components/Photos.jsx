import React, {Component} from 'react';
import { Divider, Image, Card } from 'semantic-ui-react'
import { Checkbox } from 'semantic-ui-react'

class Photos extends Component {
  constructor(props){
    super(props);
    this.state = {
      pictures: [],
    };
  }

componentDidMount(){
  fetch('/photos/search',{method : 'POST'})
  .then(function(response){

      return response.json();

    })
  .then(function(data){
      console.log('fetch data', data);
      let picArray = data.photos.photo.map((pic) => {
        var srcPath = 'https://farm'+pic.farm+'.staticflickr.com/'+pic.server+'/'+pic.id+'_'+pic.secret+'.jpg';
        var picTitle = pic.title;
        return(
           <div key={pic.id}>
              <Image
                  src={srcPath}
                  text= {picTitle}
              />
              <Checkbox label={{ children: 'select' }} />
           </div>
        )
      })
      this.setState({pictures: picArray});
    }.bind(this))
 }

  render() {
    return (
      <div>
          <h1 className='ui big header'>Select 5 places you want to go! </h1>
          <Image.Group size='medium' horizontal image>
           {this.state.pictures}
          </Image.Group>
          <button className="ui blue button" onClick ={this.props.sendSelectedPhotos}>Submit</button>
      </div>
    )
  }
}

export default Photos;
