import styled from 'styled-components';

export const QuizLobbyContainer = styled.div`
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

export const Footer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: ${props => props.flexDirection ? props.flexDirection : 'row'};
`;

export const Divider = styled.div`
  height: 0.7rem;
`;