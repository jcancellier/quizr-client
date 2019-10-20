import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { Provider } from 'react-redux';
import { CssBaseline } from '@material-ui/core';
import theme from './global/styles/theme';
import styled from 'styled-components';
import { Router } from './routing';
import store from './redux/store';

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppContainer>
          <Router />
        </AppContainer>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
