import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { CssBaseline } from '@material-ui/core';
import theme from './global/styles/theme';
import styled from 'styled-components';
import { HomePage } from './pages';
import { AppHeader } from './global/components';

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppHeader />
    </ThemeProvider>
  );
}

export default App;
