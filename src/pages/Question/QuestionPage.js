import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Content, Header, QuestionPageContainer, Footer, AnswersRow, AnswersContainer, AnswerText, AnswerHeader } from './style';
import { Typography } from '@material-ui/core';
import { Answer } from './components/Answer';
import { Timer, UsersOnline } from '../../global/components';

class QuestionPageComponent extends Component {
  render() {
    return (
      <QuestionPageContainer>
        <Header>
          <Typography variant="h4" style={{ fontSize: 'calc(10px + 2.5vw)' }}>
            {this.props.currentQuestion.text}
          </Typography>
        </Header>
        <Content>
          <div style={{display: 'flex', flex: 1, justifyContent: 'flex-start', flexdirection: 'column'}}>
            <Timer time={this.props.roomTime} />
          </div>
          <div style={{display: 'flex', flex: 1, justifyContent: 'flex-end', flexdirection: 'column'}}>
            <UsersOnline usersCount={this.props.quizRoomUsersOnline}/>
          </div>
        </Content>

        <Footer>
          <AnswersContainer>
            <AnswersRow>
              <Answer>
                <AnswerHeader>
                  A
                </AnswerHeader>
                <AnswerText>
                  {this.props.currentQuestion.answers[0]}
                </AnswerText>
              </Answer>
              <Answer>
                <AnswerHeader>
                  B
                </AnswerHeader>
                <AnswerText>
                {this.props.currentQuestion.answers[1]}
                </AnswerText>
              </Answer>
            </AnswersRow>
            <AnswersRow>
              <Answer>
                <AnswerHeader>
                  C
                </AnswerHeader>
                <AnswerText>
                {this.props.currentQuestion.answers[2]}
                </AnswerText>
              </Answer>
              <Answer>
                <AnswerHeader>
                  D
                </AnswerHeader>
                <AnswerText>
                {this.props.currentQuestion.answers[3]}
                </AnswerText>
              </Answer>
            </AnswersRow>
          </AnswersContainer>
        </Footer>
      </QuestionPageContainer>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    questionTime: state.quizRoom.roomTime,
    quizRoomUsersOnline: state.quizRoom.usersOnline,
    roomTime: state.quizRoom.roomTime,
    currentQuestion: state.quizRoom.currentQuestion
  }
}

const QuestionPage = connect(mapStateToProps)(QuestionPageComponent);

export { QuestionPage };