import React from 'react';
import { Form, Icon } from 'semantic-ui-react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      email: '',
      submittedPassword: '',
      submittedEmail: '',
    };
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handlePasswordChange(e) {
    this.setState({
      password: e.target.value,
      submittedPassword: e.target.value,
    });
  }

  handleEmailChange(e) {
    this.setState({
      email: e.target.value,
      submittedEmail: e.target.value,
    });
  }

  handleSubmit() {
    console.log(this.state.submittedEmail, this.state.submittedPassword)
    this.setState({
      password: '',
      email: '',
    });
  }

  render() {
    const { password, email } = this.state;
    return (
      <div>
        <div className="ui center aligned basic segment">
          <Form onSubmit={this.handleSubmit} style={{ display: 'inline-block' }}>
            <Form.Group>
              <Form.Input placeholder='Email' name='email' value={email} onChange={this.handleEmailChange} />
            </Form.Group>
            <Form.Group>
              <Form.Input
                type='password'
                placeholder='Password'
                name='password'
                value={password}
                onChange={this.handlePasswordChange}
              />
            </Form.Group>
            <Form.Button content='Submit' />
          </Form>
          <div className="ui horizontal divider">
            Or
          </div>
          <div className="ui big blue labeled icon button">
            <Icon className="twitter"></Icon>
            Sign in with Twitter
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
