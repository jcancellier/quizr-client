import React, { Component, Fragment } from 'react';
import { AppHeader } from '../../global/components';
import { connect } from 'react-redux';
import { Content, Header, PostQuestionPageContainer, Footer } from './style';
import { Typography } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied'

class PostQuestionPageComponent extends Component {

  renderCorrect = () => {
    return (
      <Fragment>
        <CheckIcon style={{ fontSize: 'calc(15px + 8vw)' }} />
        <Typography variant="h4" style={{ fontSize: 'calc(10px + 1.5vw)' }}>
          Correct!
          </Typography>
        <Typography variant="h4" style={{ fontSize: 'calc(10px + .7vw)' }}>
          +1 points
        </Typography>
      </Fragment>
    )
  }

  renderIncorrect = () => {
    return (
      <Fragment>
        <SentimentVeryDissatisfiedIcon style={{ fontSize: 'calc(15px + 4vw)', paddingBottom: '0.5rem' }} />
        <Typography variant="h4" style={{ fontSize: 'calc(10px + 1.5vw)' }}>
          Incorrect
        </Typography>
      </Fragment>
    )
  }

  determineCorrectOrIncorrect = (correct = false) => {
    if (correct) {
      return this.renderCorrect();
    }
    return this.renderIncorrect();
  }

  render() {
    return (
      <PostQuestionPageContainer>
        <Header>
          {
            this.determineCorrectOrIncorrect()
          }
        </Header>

        <Content>
        </Content>

        <Footer>
        </Footer>
      </PostQuestionPageContainer>
    );
  }
}

const PostQuestionPage = connect()(PostQuestionPageComponent);

export { PostQuestionPage };