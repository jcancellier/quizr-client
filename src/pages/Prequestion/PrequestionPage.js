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
        <AppHeader buttons={false} />
        <Header>
          <Typography variant="h4" style={{ fontSize: 'calc(10px + .8vw)' }}>
          Question 1 of 5
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