import React, { Component } from 'react';
import { AppHeader } from '../../global/components';
import { connect } from 'react-redux';
import { Content, Header, PostQuestionPageContainer, Footer } from './style';
import { Typography } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';

class PostQuestionPageComponent extends Component {
  render() {
    return (
      <PostQuestionPageContainer>
        <AppHeader buttons={false} />
        <Header>
          <CheckIcon style={{fontSize: 'calc(15px + 8vw)'}}/>
          <Typography variant="h4" style={{ fontSize: 'calc(10px + 1.5vw)' }}>
          Correct!
          </Typography>
          <Typography variant="h4" style={{ fontSize: 'calc(10px + .7vw)' }}>
          +1 points
          </Typography>
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