import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setHubConnection } from './redux/actions/ServerActions';
import { quizrHubProductionUrl } from './api/hub';
import * as signalR from '@microsoft/signalr';
import { ThemeProvider } from '@material-ui/styles';
import { CssBaseline } from '@material-ui/core';
import theme from './global/styles/theme';
import styled from 'styled-components';
import { Router } from './routing';

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

function App(props) {
  useEffect(() => {
    let connection = new signalR.HubConnectionBuilder()
      .withUrl(quizrHubProductionUrl)
      .build();

    connection.start()
      .then(() => {
        alert('granted')
        props.setHubConnection(connection);
      })
      .catch((err) => {
        alert(err);
      })
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppContainer>
        <Router />
      </AppContainer>
    </ThemeProvider>
  );
}

export default connect(null,{
  setHubConnection
})(App);
