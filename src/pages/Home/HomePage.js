import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import { Container } from '@material-ui/core';

class HomePage extends Component {
  render() {
    return (
      <Container>
        <Typography variant="h5">Home Page</Typography>
      </Container>
    )
  }
}

export { HomePage };
