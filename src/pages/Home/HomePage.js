import React, { Component } from 'react';
import { TextField } from '@material-ui/core';
import { HomePageContainer } from './style';

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
        <TextField
          id='username-input'
          label='Username'
          value={this.state.usernameInputText}
          onChange={e => this.handleUsernameInputTextChange(e)}
          variant='filled'
        />
      </HomePageContainer>
    )
  }
}

export { HomePage };
