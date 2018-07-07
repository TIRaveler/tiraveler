import React from 'react';
import PropTypes from 'prop-types';
import { Form, Icon } from 'semantic-ui-react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      name: '',
      submittedPassword: '',
      submittedName: '',
    };
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handlePasswordChange(e) {
    this.setState({
      password: e.target.value,
      submittedPassword: e.target.value,
    });
  }

  handleNameChange(e) {
    this.setState({
      name: e.target.value,
      submittedName: e.target.value,
    });
  }

  handleSubmit(e) {
    const { displayUsername } = this.props;
    e.preventDefault();
    const { submittedPassword, submittedName } = this.state;
    this.setState({
      password: '',
      name: '',
    });
    axios.post('/user/login', {
      name: submittedName,
      password: submittedPassword,
    })
      .then(() => {
        displayUsername(this.state.submittedName);
        this.props.history.push('/search');
      })
      .catch(err => console.error(err));
  }

  render() {
    const { password, name } = this.state;
    return (
      <div>
        <div className="ui center aligned basic segment">
          <Form onSubmit={this.handleSubmit} style={{ display: 'inline-block' }}>
            <Form.Group>
              <Form.Input placeholder="Name" name="name" value={name} onChange={this.handleNameChange} />
            </Form.Group>
            <Form.Group>
              <Form.Input
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={this.handlePasswordChange}
              />
            </Form.Group>
            <Form.Button content="Submit" />
          </Form>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  displayUsername: PropTypes.func.isRequired,
};

export default withRouter(Login);
