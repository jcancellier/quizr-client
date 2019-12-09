import styled from 'styled-components';

export const ResultsPageContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  align-items: ${props => props.alignItems ? props.alignItems : 'center'};
  justify-content: ${props => props.justifyContent ? props.justifyContent : 'center'};
`;

export const ResultCardsContainer = styled.div`
  display: flex;
  flex: 1;
  /* align-items: ${props => props.alignItems ? props.alignItems : 'center'};
  justify-content: ${props => props.justifyContent ? props.justifyContent : 'center'}; */
  flex-direction: row;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const Footer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Divider = styled.div`
  height: 0.7rem;
`;

export const JoinQuizForm = styled.form`
  display: flex;
  flex-direction: column;
  /* align-items: center;
  justify-content: center; */
`;
