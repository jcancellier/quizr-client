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
  AuthFormContainer,
  Divider
} from './style';

class HomePage extends Component {
  state = {
    usernameInputText: ''
  }

  handleUsernameInputTextChange = (e) => {
    this.setState({ usernameInputText: e.target.value })
  }

  render() {
    return (
      <HomePageContainer>
        <AuthFormContainer>
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
          >
            Join
          </Button>
        </AuthFormContainer>
      </HomePageContainer>
    )
  }
}

export { HomePage };
