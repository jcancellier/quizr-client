import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';



const AppHeader = (props) => {
  return (
    <AppBar position="static" color='primary'>
      <Toolbar>
        <HeaderText variant="h4">Quizr</HeaderText>
        { props.buttons && <Button color="inherit">Create Quiz</Button>}
      </Toolbar>
    </AppBar>
  );
}

AppHeader.defaultProps = {
  buttons: true
}

// styles
const HeaderText = styled(Typography)`
  flex: 1;
`;

export { AppHeader };