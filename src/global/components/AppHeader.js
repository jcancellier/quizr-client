import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

const AppHeader = () => {
  return (
    <AppBar position="static" color='inherit'>
      <Toolbar>
        <HeaderText variant="h4">Quizr</HeaderText>
        <Button color="inherit">Create Quiz</Button>
      </Toolbar>
    </AppBar>
  );
}

// styles
const HeaderText = styled(Typography)`
  flex: 1;
`;

export { AppHeader };