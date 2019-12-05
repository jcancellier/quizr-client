import React, { Component } from 'react';
import { AppHeader } from '../../global/components';
import { connect } from 'react-redux';
import { Content, Header, PrequestionPageContainer, Footer } from './style';
import { Typography } from '@material-ui/core';
import { Timer } from '../../global/components';


class PrequestionPageComponent extends Component {
  render() {
    return (
      <PrequestionPageContainer>
        <Header>
          <Typography variant="h4" style={{ fontSize: 'calc(10px + .8vw)' }}>
            Question {this.props.currentQuestion.currentQuestionIndex} of {this.props.currentQuestion.questionCount}
          </Typography>
          <Typography variant="h4" style={{ fontSize: 'calc(10px + 2vw)' }}>
          {this.props.currentQuestion.text}      
          </Typography>
        </Header>

        <Content>
          <div style={{display: 'flex', flex: 1, justifyContent: 'flex-start', flexdirection: 'column'}}>
            <Timer time={this.props.questionTime} />
          </div>
        </Content>
          
        <Footer>     
        </Footer>
      </PrequestionPageContainer>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    questionTime: state.quizRoom.roomTime,
    currentQuestion: state.quizRoom.currentQuestion
  }
}

const PrequestionPage = connect(mapStateToProps)(PrequestionPageComponent);

export { PrequestionPage };