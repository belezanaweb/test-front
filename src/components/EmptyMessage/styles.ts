import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  text-transform: uppercase;
  color: ${(props) => props.theme.title};
  font-size: 1.4rem;
  font-weight: bold;

  a {
    text-decoration: underline;
    color: ${(props) => props.theme.primary};
  }
`;
