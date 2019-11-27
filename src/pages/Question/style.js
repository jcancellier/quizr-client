import React from 'react';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';

export const QuestionPageContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  padding: 2rem;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  padding: 2rem;
  align-items: ${props => props.alignItems ? props.alignItems : 'center'};
  justify-content: ${props => props.justifyContent ? props.justifyContent : 'center'};
`;

export const Footer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: ${props => props.flexDirection ? props.flexDirection : 'row'};
`;

export const Divider = styled.div`
  height: 0.7rem;
`;

export const AnswersContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const AnswersRow = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
`;

export const AnswerText = (props) => {
  return (
    <div style={{ display: 'flex', flex: 5, alignItems: 'center', justifyContent: 'center', paddingRight: '0.5rem', paddingLeft: '0.5rem' }}>
      <Typography style={{ fontSize: 'calc(12px + 1vw)', textAlign: 'center' }}>
        {props.children}
      </Typography>
    </div>
  )
}

export const AnswerHeader = (props) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', height: '100%', alignItems: 'flex-start', paddingTop: '0.5rem', paddingLeft: '10px' }}>
      <Typography>
        {props.children}
      </Typography>
    </div>
  )
}