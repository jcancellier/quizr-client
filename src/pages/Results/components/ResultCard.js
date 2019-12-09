import React from 'react';
import { Paper, Typography } from '@material-ui/core'
import styled from 'styled-components';

const ResultPaper = styled(Paper)`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100%;
  margin: 1rem;
  justify-content: space-between;
  align-items: center;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
`;

const ResultCard = (props) => {
  return (
    <ResultPaper>
      <Typography variant="h3">{props.place}</Typography>
      <Typography variant="h5">{props.userName}</Typography>
      <Typography variant="h5">Score: {props.score}</Typography>
    </ResultPaper>
  )
}

export default ResultCard;