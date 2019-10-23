import React, { Component, Fragment } from 'react';
import { Person } from '@material-ui/icons';
import {
  TextField,
  Button,
  // LinearProgress
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
import { connect } from 'react-redux';
import { setIsLoggedIn, setUser } from '../../redux/actions/AuthActions';

const minUsernameInputTextLength = 1;
// const minPasswordInputTextLength = 1;

class Home extends Component {
  state = {
    usernameInputText: '',
    // passwordInputText: '',
    submitAuthenticationFormDisable: true,
    submitAuthenticationFormError: false
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

    // Login
    this.props.connection.invoke("Login", this.state.usernameInputText)
      .then(user => {
        console.info(`Logged in as user ${user}`);
        this.props.setIsLoggedIn(true);
        this.props.setUser(user);
        this.props.history.push('/joinquiz');
      })
      .catch(err => {
        console.log(err.toString())
        this.setState({ submitAuthenticationFormError: true })
      });
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
                error={this.state.submitAuthenticationFormError}
                helperText={this.state.submitAuthenticationFormError ? 'Username already being used' : null}
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

const mapStateToProps = (state) => {
  return {
    connection: state.server.hubConnection
  }
}

const HomePage = connect(mapStateToProps, {
  setIsLoggedIn,
  setUser
})(Home);

export {
  HomePage
};
