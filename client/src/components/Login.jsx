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
      isOpen: false,
      password: '',
      name: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /**
   * Open review modal
   */
  open() {
    this.setState({
      isOpen: true,
    });
  }

  /**
   * Close review modal
   */
  close() {
    this.setState({
      isOpen: false,
    });
  }

  /**
   * Handle username and pw change
   */
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  /**
   * Handle login submission
   */
  handleSubmit(e) {
    const { displayUsername, history, log } = this.props;
    e.preventDefault();
    const { password, name } = this.state;
    axios.post('/user/login', {
      name,
      password,
    })
      .then((res) => {
        log(res.data);
        displayUsername(name);
        history.push('/search');
      })
      .catch(err => log(err));
    this.close();
  }

  render() {
    const { history } = this.props;
    const { password, name, isOpen } = this.state;
    return (
      <div
        open={isOpen}
        onClose={this.close}
      >
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
  log: PropTypes.func.isRequired,
};

export default withRouter(Login);
