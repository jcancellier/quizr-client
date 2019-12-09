import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Typography } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied'
import { Answer } from '../Question/components/Answer';
import { Content, Header, QuestionPageContainer, Footer, AnswersRow, AnswersContainer, AnswerText, AnswerHeader } from '../Question/style';
import { green, red } from '@material-ui/core/colors'

class PostQuestionPageComponent extends Component {

  state = {
    disableStyles: [
      true,
      true,
      true,
      true
    ],
    answerCorrect: [
      false,
      false,
      false,
      false
    ],
    answerIncorrect: [
      false,
      false,
      false,
      false
    ]
  }

  componentDidMount() {
    if (this.props.currentQuestionResult.isAnswerCorrect !== null)
      this.determineAnswerStyles();
  }

  componentWillUnmount() {
    // TODO: clear currentQuestionResult
  }

  determineAnswerStyles() {
    const { currentQuestionResult } = this.props;
    const { disableStyles, answerCorrect, answerIncorrect } = this.state

    // If answer was correct then disable all other questions
    if (currentQuestionResult.isAnswerCorrect) {
      answerCorrect[currentQuestionResult.correctAnswer] = true;
      for (let i = 0; i < 4; i++) {
        if (i === currentQuestionResult.answer) {
          continue;
        }
        disableStyles[i] = false;
      }
    }

    // If answer was incorrect then disable everything except selected answer and correct answer
    if (!currentQuestionResult.isAnswerCorrect) {
      answerCorrect[currentQuestionResult.correctAnswer] = true;
      answerIncorrect[currentQuestionResult.answer] = true;
      for (let i = 0; i < 4; i++) {
        if (i === currentQuestionResult.answer || i === currentQuestionResult.correctAnswer) {
          continue;
        }
        disableStyles[i] = false;
      }
    }

    this.setState({ disableStyles: [...disableStyles] });
    this.setState({ answerCorrect: [...answerCorrect] });
    this.setState({ answerIncorrect: [...answerIncorrect] });
  }

  renderCorrect = () => {
    return (
      <Fragment>
        <CheckIcon style={{ fontSize: 'calc(15px + 8vw)', paddingBottom: '0.5rem', color: green[400] }}/>
        <Typography variant="h4" style={{ fontSize: 'calc(10px + 1.5vw)', color: green[400] }}>
          Correct!
        </Typography>
        <Typography color="primary"  variant="h4" style={{ fontSize: 'calc(10px + 1.5vw)', marginTop: '0.3rem' }}>
          Current Score: {this.props.currentQuestionResult.currentScore}
        </Typography>
      </Fragment>
    )
  }

  renderIncorrect = () => {
    return (
      <Fragment>
        <SentimentVeryDissatisfiedIcon style={{ fontSize: 'calc(15px + 4vw)', paddingBottom: '0.5rem', color: red[400] }}/>
        <Typography variant="h4" style={{ fontSize: 'calc(10px + 1.5vw)', color: red[400] }}>
          {this.props.isAnswerCorrect === null ? 'Question not answered' : 'Incorrect'}
        </Typography>
        <Typography color="primary"  variant="h4" style={{ fontSize: 'calc(10px + 1.5vw)', marginTop: '0.3rem' }}>
          Current Score: {this.props.currentQuestionResult.currentScore}
        </Typography>
      </Fragment>
    )
  }

  determineCorrectOrIncorrect = (correct = true) => {
    if (correct) {
      return this.renderCorrect();
    }
    return this.renderIncorrect();
  }

  render() {
    return (
      <QuestionPageContainer>
        <Header>
          <Typography variant="h4" style={{ fontSize: 'calc(10px + 2.5vw)' }}>
            {this.props.currentQuestion.text}
          </Typography>
        </Header>
        <Content flexDirection="column">
          {this.determineCorrectOrIncorrect(this.props.currentQuestionResult.isAnswerCorrect)}

        </Content>

        <Footer>
          <AnswersContainer>
            <AnswersRow>
              <Answer disabled noStyleChangesOnDisabled={this.state.disableStyles[0]} correct={this.state.answerCorrect[0]} incorrect={this.state.answerIncorrect[0]}>
                <AnswerHeader>
                  A
                </AnswerHeader>
                <AnswerText>
                  {this.props.currentQuestion.answers[0]}
                </AnswerText>
              </Answer>
              <Answer disabled noStyleChangesOnDisabled={this.state.disableStyles[1]} correct={this.state.answerCorrect[1]} incorrect={this.state.answerIncorrect[1]}>
                <AnswerHeader>
                  B
                </AnswerHeader>
                <AnswerText>
                  {this.props.currentQuestion.answers[1]}
                </AnswerText>
              </Answer>
            </AnswersRow>
            <AnswersRow>
              <Answer disabled noStyleChangesOnDisabled={this.state.disableStyles[2]} correct={this.state.answerCorrect[2]} incorrect={this.state.answerIncorrect[2]}>
                <AnswerHeader>
                  C
                </AnswerHeader>
                <AnswerText>
                  {this.props.currentQuestion.answers[2]}
                </AnswerText>
              </Answer>
              <Answer disabled noStyleChangesOnDisabled={this.state.disableStyles[3]} correct={this.state.answerCorrect[3]} incorrect={this.state.answerIncorrect[3]}>
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
    currentQuestion: state.quizRoom.currentQuestion,
    currentQuestionResult: state.quizRoom.currentQuestionResult
  }
}

const PostQuestionPage = connect(mapStateToProps)(PostQuestionPageComponent);

export { PostQuestionPage };