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

class HomePage extends Component {
  state = {
    usernameInputText: '',
    usernameInputTextDisable: true
  }

  handleUsernameInputTextChange = (e) => {
    this.setState({ usernameInputText: e.target.value }, () => {
      // Validate minimum usernameInputText length
      if (this.state.usernameInputText.length >= minUsernameInputTextLength)
        this.setState({ usernameInputTextDisable: false });
      else 
        this.setState({ usernameInputTextDisable: true });
    })
  }

  handleSubmitAuthenticationForm = (e) => {
    e.preventDefault();
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
            {/* <Divider/>
            <TextField
              id='password-input'
              label='Password'
              value={this.state.usernameInputText}
              onChange={e => this.handleUsernameInputTextChange(e)}
              variant='filled'
              type="password"
            /> */}
          </AuthFormTextContainer>
          <Button
              variant='contained'
              color='primary'
              endIcon={ <Person /> }
              disabled={this.state.usernameInputTextDisable}
              onClick={this.handleSubmitAuthenticationForm}
          >
            Join
          </Button>
        </AuthForm>
      </HomePageContainer>
    )
  }
}

export { HomePage };
