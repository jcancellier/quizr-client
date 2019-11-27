import React from 'react';
import { Typography } from '@material-ui/core';
import styled from 'styled-components';

const TimerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Timer = (props) => {
  return (
    <TimerContainer>
      <Typography variant="h4" color="textSecondary">
        {props.time}
      </Typography>
      <Typography variant="h6" color="textSecondary">
        Time
      </Typography>
    </TimerContainer>
  )
}

export { Timer };