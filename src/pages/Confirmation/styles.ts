import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  h2 {
    text-transform: uppercase;
    color: ${(props) => props.theme.types.title};
    font-size: 1.4rem;
    font-weight: bold;

    margin: 1rem 0 0.5rem;
  }
`;

export const PaymentMethod = styled.main`
  display: flex;
  flex-direction: column;

  div {
    background-color: white;
    padding: 0.9rem;

    li {
      font-size: 1.4rem;
      line-height: 1.7rem;
    }
  }
`;
