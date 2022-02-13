import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  background-color: ${(props) => props.theme.white};
  box-shadow: 0.1rem 0.1rem 0.5rem 0 ${(props) => props.theme.shadow};

  nav {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 1.2rem;

    button {
      font-size: 1.3rem;
      font-weight: bold;
      line-height: 1.6rem;
      text-transform: uppercase;
      color: ${(props) => props.theme.disabled};
      background-color: ${(props) => props.theme.white};
    }

    button.active {
      color: ${(props) => props.theme.primary};
    }
  }
`;
