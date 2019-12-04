import styled from 'styled-components';

export const PostQuestionPageContainer = styled.div`
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
  padding: 15rem;
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