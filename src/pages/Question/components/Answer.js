import React from 'react';
import { CardActionArea, Card } from "@material-ui/core";
import styled from 'styled-components';

const AnswerCard = styled(Card)`
  display: flex;
  flex: 1;
  /* padding: 0.5rem; */
  margin: 0.5rem;
  /* padding: 0 1rem; */
  /* padding-top: 1rem; */
`;

export const Answer = (props) => {
  return (
    <AnswerCard>
      <CardActionArea onClick={props.onClick} style={{ display: "flex", flex: 1 }}>
        {props.children}
      </CardActionArea>
    </AnswerCard>
  )
}