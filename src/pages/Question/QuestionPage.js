import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Content, Header, QuestionPageContainer, Footer, AnswersRow, AnswersContainer, AnswerText, AnswerHeader } from './style';
import { Typography } from '@material-ui/core';
import { Answer } from './components/Answer';
import { Timer, UsersOnline } from '../../global/components';
import { setCurrentQuestionResult } from '../../redux/actions/QuizRoomActions';

class QuestionPageComponent extends Component {

  state = {
    // bool array where each entry represents each answer's `disabled` attribute
    disableAnswers: [
      true,
      true,
      true,
      true
    ],
    disabled: false
  }

  componentDidMount() {
    // As soon as question loads set default currentQuestion result in the case where user does not answer the question
    this.props.setCurrentQuestionResult({
      isAnswerCorrect: null,
      correctAnswer: -1,
      answer: -1,
      currentScore: this.props.currentQuestionResult.currentScore !== -1 ? this.props.currentQuestionResult.currentScore : 0
    })
  }

  _handleAnswerClick = (answerIndex) => {
    // Disable question clicks
    this._disableAllQuestionsExcept(answerIndex);

    // Send Answer to server
    this.props.connection.invoke('AnswerQuestion', answerIndex, this.props.room.id)
      .then((questionResult) => {
        this.props.setCurrentQuestionResult(questionResult);
      })
      .catch((err) => {
        console.error('error answering question');
      })
  }

  _disableAllQuestionsExcept = (exceptQuestionIndex) => {
    this.setState({ disabled: true })
    let disabledAnswersCopy = this.state.disableAnswers;
    for (let i = 0; i < 4; i++) {
      if (i === exceptQuestionIndex) {
        continue;
      }
      disabledAnswersCopy[i] = false;
    }
    this.setState({disableAnswers: [...disabledAnswersCopy]})
  }

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
              <Answer onClick={this._handleAnswerClick.bind(this, 0)} disabled={this.state.disabled} noStyleChangesOnDisabled={this.state.disableAnswers[0]}>
                <AnswerHeader>
                  A
                </AnswerHeader>
                <AnswerText>
                  {this.props.currentQuestion.answers[0]}
                </AnswerText>
              </Answer>
              <Answer onClick={this._handleAnswerClick.bind(this, 1)} disabled={this.state.disabled} noStyleChangesOnDisabled={this.state.disableAnswers[1]}>
                <AnswerHeader>
                  B
                </AnswerHeader>
                <AnswerText>
                {this.props.currentQuestion.answers[1]}
                </AnswerText>
              </Answer>
            </AnswersRow>
            <AnswersRow>
              <Answer onClick={this._handleAnswerClick.bind(this, 2)} disabled={this.state.disabled} noStyleChangesOnDisabled={this.state.disableAnswers[2]}>
                <AnswerHeader>
                  C
                </AnswerHeader>
                <AnswerText>
                {this.props.currentQuestion.answers[2]}
                </AnswerText>
              </Answer>
              <Answer onClick={this._handleAnswerClick.bind(this, 3)} disabled={this.state.disabled} noStyleChangesOnDisabled={this.state.disableAnswers[3]}>
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
    quizRoomUsersOnline: state.quizRoom.usersOnline,
    roomTime: state.quizRoom.roomTime,
    currentQuestion: state.quizRoom.currentQuestion,
    connection: state.server.hubConnection,
    room: state.quizRoom.quizRoom,
    currentQuestionResult: state.quizRoom.currentQuestionResult,
  }
}

const QuestionPage = connect(mapStateToProps, {
  setCurrentQuestionResult
})(QuestionPageComponent);

export { QuestionPage };