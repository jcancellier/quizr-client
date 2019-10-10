import styled from 'styled-components';

export const HomePageContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const AuthFormTextContainer = styled.div`
  display: flex;
  padding-bottom: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Divider = styled.div`
  width: 0.5rem;

  @media (max-width: 768px) {
    height: 0.7rem;
  }
`;