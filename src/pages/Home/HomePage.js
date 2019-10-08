import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import { HomePageContainer } from './style';

class HomePage extends Component {
  render() {
    return (
      <HomePageContainer>
        <Typography variant="h5">Home Page</Typography>
      </HomePageContainer>
    )
  }
}

export { HomePage };
