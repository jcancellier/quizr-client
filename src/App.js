import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setHubConnection } from './redux/actions/ServerActions';
import { quizrHubProductionUrl, quizrHubDevelopmentMacUrl } from './api/hub';
import * as signalR from '@microsoft/signalr';
import { ThemeProvider } from '@material-ui/styles';
import { CssBaseline } from '@material-ui/core';
import theme from './global/styles/theme';
import styled from 'styled-components';
import { Router } from './routing';
import LoadingOverlay from 'react-loading-overlay';

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

class App extends Component {
  state = {
    isHubConnectionLoading: false,
    errorLoadingHubConnection: false
  }

  setIsHubConnectionLoading = (loading) => {
    this.setState({ isHubConnectionLoading: loading })
  }

  componentDidMount() {
    this.setIsHubConnectionLoading(true);

    let connection = new signalR.HubConnectionBuilder()
      .withUrl(quizrHubDevelopmentMacUrl, signalR.HttpTransportType.WebSockets)
      .withAutomaticReconnect()
      .build();

    connection.onreconnecting(() => { this.setIsHubConnectionLoading(true) })
    connection.onreconnected(() => { this.setIsHubConnectionLoading(false) })
    
    connection.start()
      .then(() => {
        this.props.setHubConnection(connection);
        this.setIsHubConnectionLoading(false);
      })
      .catch((err) => {
        alert(err);
        this.setIsHubConnectionLoading(false);
        this.setState({ errorLoadingHubConnection: true });
      })
  }

  determineLoadingOverlayText = () => {
    if (this.state.errorLoadingHubConnection) {
      return "Error connecting to server. Please refresh page to try again!"
    }
    else if (this.state.isHubConnectionLoading) {
      return ""
    }
    else if (this.props.isLoggingIn)
      return "Logging in"
    else
      return ""
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <LoadingOverlay
          active={this.state.isHubConnectionLoading || this.props.isLoggingIn || this.state.errorLoadingHubConnection}
          spinner={!this.state.errorLoadingHubConnection}
          fadeSpeed={0}
          text={this.determineLoadingOverlayText()}
          styles={{
            spinner: (base) => ({
              ...base,
              '& svg circle': {
                stroke: `${theme.palette.primary[theme.palette.type]}`
              }
            }),
            content: (base) => ({
              ...base,
              fontFamily: theme.typography.fontFamily
            })
          }}
        >
          <CssBaseline />
          <AppContainer>
            <Router />
          </AppContainer>
        </LoadingOverlay>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggingIn: state.auth.isLoggingIn
  }
}

export default connect(mapStateToProps, {
  setHubConnection
})(App);