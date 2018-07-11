import React from 'react';
import PropTypes from 'prop-types';
import {
  Form, Icon, Button,
} from 'semantic-ui-react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';


class Login extends React.Component {
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
    axios.post('/user/login', {
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
    const { history } = this.props;
    return (
      <div>
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
          <div className="ui horizontal divider">
            Or
          </div>
          <Button
            basic
            color="blue"
            onClick={() => history.push('/signup')}
          >
            New? Signup here!
          </Button>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  displayUsername: PropTypes.func.isRequired,
  history: PropTypes.arrayOf(PropTypes.string).isRequired,
  setItineraries: PropTypes.func.isRequired,
};

export default withRouter(Login);
