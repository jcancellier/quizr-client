import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Typography } from '@material-ui/core';

class QuizLobby extends Component {
  render() {
    return (
      <Typography>Quiz Lobby</Typography>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    
  }
}

const QuizLobbyPage = connect(mapStateToProps, {

})(QuizLobby)

export { QuizLobbyPage }