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
          Who is the current president of CSUB?          
          </Typography>
        </Header>

        <Content>
          <div style={{display: 'flex', flex: 1, justifyContent: 'flex-start', flexdirection: 'column'}}>
            <Timer time={0} />
          </div>
        </Content>
          
        <Footer>     
        </Footer>
      </PrequestionPageContainer>
    );
  }
}

const PrequestionPage = connect()(PrequestionPageComponent);

export { PrequestionPage };