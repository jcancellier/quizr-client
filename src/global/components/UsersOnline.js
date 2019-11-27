import React from 'react';
import { Typography } from '@material-ui/core';
import styled from 'styled-components';

const UsersOnlineContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const UsersOnline = (props) => {
  return (
    <UsersOnlineContainer>
      <Typography variant="h4" color="textSecondary">
        {props.usersCount}
      </Typography>
      <Typography variant="h6" color="textSecondary">
        Users Online
      </Typography>
    </UsersOnlineContainer>
  )
}

export { UsersOnline };
