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
            Who is the current president of CSUB?
          </Typography>
        </Header>
        <Content>
          <div style={{display: 'flex', flex: 1, justifyContent: 'flex-start', flexdirection: 'column'}}>
            <Timer time={0} />
          </div>
          <div style={{display: 'flex', flex: 1, justifyContent: 'flex-end', flexdirection: 'column'}}>
            <UsersOnline usersCount={10}/>
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
                  Lynnette Zelezny
                </AnswerText>
              </Answer>
              <Answer>
                <AnswerHeader>
                  B
                </AnswerHeader>
                <AnswerText>
                  Truett S. Cathy
                </AnswerText>
              </Answer>
            </AnswersRow>
            <AnswersRow>
              <Answer>
                <AnswerHeader>
                  C
                </AnswerHeader>
                <AnswerText>
                  Horace Mitchell
                </AnswerText>
              </Answer>
              <Answer>
                <AnswerHeader>
                  D
                </AnswerHeader>
                <AnswerText>
                  Vernon B. Harper Jr.
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
    questionTime: state.quizRoom.roomTime
  }
}

const QuestionPage = connect(mapStateToProps)(QuestionPageComponent);

export { QuestionPage };