import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Typography } from '@material-ui/core';
import { QuizLobbyContainer, Header, Content, Footer} from './style';

class QuizLobby extends Component {
  render() {
    return (
      <QuizLobbyContainer>
        <Header>
          <Content>
            <Typography variant={'h2'}>Preparing quiz</Typography>
          </Content>
        </Header>

        <Content>
          <Content>
            <Typography variant={'h1'}>{this.props.roomTime}</Typography>
          </Content>
        </Content>

        <Footer flexDirection={'column'}>
          <Content/>
          <Content>
            <Typography variant={'h6'}>Online Users: {this.props.quizRoomUsersOnline}</Typography>
          </Content>
        </Footer>
      </QuizLobbyContainer>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    roomTime: state.quizRoom.roomTime,
    quizRoomUsersOnline: state.quizRoom.usersOnline
  }
}

const QuizLobbyPage = connect(mapStateToProps, {

})(QuizLobby)

export { QuizLobbyPage }