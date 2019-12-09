import React from 'react';
import { CardActionArea, Card } from "@material-ui/core";
import styled from 'styled-components';
import { green, red } from '@material-ui/core/colors';


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
    <AnswerCard style={{opacity: props.disabled && !props.noStyleChangesOnDisabled ? 0.4 : 1.0, backgroundColor: props.correct ? green[400] : (props.incorrect ? red[400] : undefined)}}>
      <CardActionArea onClick={props.onClick} style={{ display: "flex", flex: 1 }} disabled={props.disabled} disableRipple>
        {props.children}
      </CardActionArea>
    </AnswerCard>
  )
}