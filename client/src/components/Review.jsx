import $ from 'jquery';
import React from 'react';
import {Button, Modal} from 'semantic-ui-react';


class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      isOpen: false
    }
    this.open=this.open.bind(this)
    this.close=this.close.bind(this)
    this.finalize=this.finalize.bind(this)
  }

  open(){
    this.setState({
      isOpen:true
    })
  }

  close(){
    this.setState({
      isOpen:false
    })
  }

  finalize(){
    $.post('/itinerary/save')
    .then(response => console.log(response))
    .catch(error => console.log(error, 'problem sending itinerary'));
    this.close();
  }

 render(){
   return (
    <Modal 
    trigger={<Button onClick={this.open}>Review</Button>}
    open={this.state.isOpen} 
    onClose={this.close}
    basic
    >
      <Modal.Header>Please Review Your Epic Itinerary</Modal.Header>
      <Modal.Content>
        <Button onClick={this.finalize}>FINALIZE!</Button>
      </Modal.Content>
    </Modal>
   )
  }
}

export default Review;
