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
  Header,
  Footer,
  Divider
} from './style';
import {
  AppHeader
} from '../../global/components';
import { connect } from 'react-redux';
import { setIsLoggedIn, setUser, setIsLoggingIn } from '../../redux/actions/AuthActions';
import { joinquizRoutePath } from '../../routing';

const minUsernameInputTextLength = 1;

class Home extends Component {
  state = {
    usernameInputText: '',
    submitAuthenticationFormDisable: true,
    submitAuthenticationFormError: false
  }

  handleUsernameInputTextChange = (e) => {
    this.setState({ usernameInputText: e.target.value }, () => {
      this.validateFormFields();
    })
  }

  renderConnectButton = () => {
    const { isLoggedIn } = this.props;
    return (
      <Button
        variant='contained'
        color='primary'
        endIcon={<Person />}
        disabled={isLoggedIn ? false : this.state.submitAuthenticationFormDisable}
        onClick={this.handleSubmitAuthenticationForm}
        type="submit"
      >
        {this.props.isLoggedIn ? "Reconnect" : "Login"}
      </Button>
    )
  }

  validateFormFields = () => {
    if (this.state.usernameInputText.length >= minUsernameInputTextLength) {
      this.setState({ submitAuthenticationFormDisable: false });
    } else {
      this.setState({ submitAuthenticationFormDisable: true });
    }
  }

  handleSubmitAuthenticationForm = (e) => {
    e.preventDefault();

    // If logged in just navigate user to join quiz page
    if (this.props.isLoggedIn) {
      this.props.history.push(joinquizRoutePath);
      return;
    }

    this.props.setIsLoggingIn(true);
    // Login
    this.props.connection.invoke("Login", this.state.usernameInputText)
      .then(user => {
        this.props.setIsLoggingIn(false);
        console.info(`Logged in as user ${user}`);
        this.props.setIsLoggedIn(true);
        this.props.setUser(user);
        this.props.history.push(joinquizRoutePath);
      })
      .catch(err => {
        this.props.setIsLoggingIn(false);
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
          <Header>
            {/* Welcome back,
            jcancellier! */}
          </Header>
          <AuthForm onSubmit={this.handleSubmitAuthenticationForm}>
            <AuthFormTextContainer>
              {!this.props.isLoggedIn && <TextField
                id='username-input'
                label='Username'
                value={this.state.usernameInputText}
                onChange={e => this.handleUsernameInputTextChange(e)}
                variant='outlined'
                error={this.state.submitAuthenticationFormError}
                helperText={this.state.submitAuthenticationFormError ? 'Username already being used' : null}
              />}
              <Divider />
              {this.renderConnectButton()}
            </AuthFormTextContainer>
          </AuthForm>
          <Footer />
        </HomePageContainer>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    connection: state.server.hubConnection,
    isLoggedIn: state.auth.isLoggedIn
  }
}

const HomePage = connect(mapStateToProps, {
  setIsLoggedIn,
  setUser,
  setIsLoggingIn
})(Home);

export {
  HomePage
};
