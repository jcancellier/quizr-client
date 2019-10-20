import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Person } from '@material-ui/icons';
import {
  TextField,
  Button,
  LinearProgress
} from '@material-ui/core';

import {
  HomePageContainer,
  AuthFormTextContainer,
  AuthForm,
  // Divider
} from './style';

import {
  AppHeader
} from '../../global/components';

const minUsernameInputTextLength = 1;
// const minPasswordInputTextLength = 1;

class HomePage extends Component {
  state = {
    usernameInputText: '',
    // passwordInputText: '',
    submitAuthenticationFormDisable: true
  }

  handleUsernameInputTextChange = (e) => {
    this.setState({ usernameInputText: e.target.value }, () => {
      this.validateFormFields();
    })
  }

  // handlePasswordInputTextChange = (e) => {
  //   this.setState({ passwordInputText: e.target.value }, () => {
  //     this.validateFormFields();
  //   })
  // }

  validateFormFields = () => {
    if (
      this.state.usernameInputText.length >= minUsernameInputTextLength 
      // && this.state.passwordInputText.length >= minPasswordInputTextLength
    ) {
      this.setState({ submitAuthenticationFormDisable: false });
    } else {
      this.setState({ submitAuthenticationFormDisable: true });
    }
  }

  handleSubmitAuthenticationForm = (e) => {
    e.preventDefault();
    // alert('Welcome');
    this.props.history.push('/joinquiz');
  }

  render() {
    return (
      <Fragment>
        <AppHeader />
        {/* <LinearProgress/> */}
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
              {/* <Divider />
              <TextField
                id='password-input'
                label='Password'
                value={this.state.passwordInputText}
                onChange={e => this.handlePasswordInputTextChange(e)}
                variant='outlined'
                type="password"
              /> */}
            </AuthFormTextContainer>
            <Button
              variant='contained'
              color='primary'
              endIcon={<Person />}
              disabled={this.state.submitAuthenticationFormDisable}
              onClick={this.handleSubmitAuthenticationForm}
              type="submit"
            >
              Connect
          </Button>
          </AuthForm>
        </HomePageContainer>
      </Fragment>
    )
  }
}

export { HomePage };
