import React, { Component } from 'react';
import {
  TextField,
  Button,
  Typography
} from '@material-ui/core';
import { Person } from '@material-ui/icons';
import {
  HomePageContainer,
  AuthFormTextContainer,
  AuthForm,
  Divider
} from './style';

const minUsernameInputTextLength = 1;
const minPasswordInputTextLength = 1;

class HomePage extends Component {
  state = {
    usernameInputText: '',
    passwordInputText: '',
    submitAuthenticationFormDisable: true
  }

  handleUsernameInputTextChange = (e) => {
    this.setState({ usernameInputText: e.target.value }, () => {
      this.validateFormFields();
    })
  }

  handlePasswordInputTextChange = (e) => {
    this.setState({ passwordInputText: e.target.value }, () => {
      this.validateFormFields();
    })
  }

  validateFormFields = () => {
    if (
      this.state.usernameInputText.length >= minUsernameInputTextLength &&
      this.state.passwordInputText.length >= minPasswordInputTextLength
    ) {
      this.setState({ submitAuthenticationFormDisable: false });
    } else {
      this.setState({ submitAuthenticationFormDisable: true });
    }
  }

  handleSubmitAuthenticationForm = (e) => {
    e.preventDefault();
    alert('Welcome');
  }

  render() {
    return (
      <HomePageContainer>
        <AuthForm onSubmit={this.handleSubmitAuthenticationForm}>
          <AuthFormTextContainer>
            <TextField
              id='username-input'
              label='Username'
              value={this.state.usernameInputText}
              onChange={e => this.handleUsernameInputTextChange(e)}
              variant='outlined'
            />
            {/* Use the components below if password will be utilized */}
            <Divider />
            <TextField
              id='password-input'
              label='Password'
              value={this.state.passwordInputText}
              onChange={e => this.handlePasswordInputTextChange(e)}
              variant='outlined'
              type="password"
            />
          </AuthFormTextContainer>
          <Button
            variant='contained'
            color='primary'
            endIcon={<Person />}
            disabled={this.state.submitAuthenticationFormDisable}
            onClick={this.handleSubmitAuthenticationForm}
            type="submit"
          >
            Join
          </Button>
        </AuthForm>
      </HomePageContainer>
    )
  }
}

export { HomePage };
