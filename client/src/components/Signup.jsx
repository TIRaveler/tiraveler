import React from 'react';
import {
  Form, Card, Icon, Header,
} from 'semantic-ui-react';
import axios from 'axios';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      name: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    const { displayUsername, history, setItineraries } = this.props;
    e.preventDefault();
    const { password, name } = this.state;
    axios.post('/user/signup', {
      name,
      password,
    })
      .then((res) => {
        setItineraries({ target: { value: res.data } });
        displayUsername(name);
        history.push('/search');
      })
      .catch(err => console.error(err));
  }

  render() {
    const { password, name } = this.state;
    return (
      <div style={{ backgroundImage: 'url("https://image.ibb.co/idiPsT/old_1130731_1280.jpg")', height: '800px' }}>
        <div style={{ justifyContent: 'center', display: 'flex', paddingTop: '170px' }}>
          <Card color="purple">
            <Card.Content>
              <Header icon="signup" content="Signup" />
              <div className="ui inverted divider" />
            </Card.Content>
            <div className="ui center aligned basic segment">
              <Form onSubmit={this.handleSubmit} style={{ display: 'inline-block' }}>
                <Form.Group>
                  <Form.Input iconPosition="left" placeholder="Username" name="name" value={name} onChange={this.handleChange}>
                    <Icon name="user" />
                    <input />
                  </Form.Input>
                </Form.Group>
                <Form.Group>
                  <Form.Input
                    iconPosition="left"
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={this.handleChange}
                  >
                    <Icon name="lock" />
                    <input />
                  </Form.Input>
                </Form.Group>
                <Form.Button content="Submit" />
              </Form>
            </div>
          </Card>
        </div>
      </div>
    );
  }
}

export default Signup;
