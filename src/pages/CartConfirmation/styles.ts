import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  h2 {
    text-transform: uppercase;
    color: ${(props) => props.theme.title};
    font-size: 1.4rem;
    font-weight: bold;

    margin: 1rem 0 0.5rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 48rem) {
    display: grid;
    grid-template-columns: 70% 1fr;
    grid-template-rows: 7rem 1fr;
    gap: 2rem;

    grid-template-areas:
      'list method'
      'list sumInfo';
  }
`;

export const PaymentMethod = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 48rem) {
    grid-area: method;
  }

  div {
    background-color: white;
    padding: 0.9rem;

    li {
      font-size: 1.4rem;
      line-height: 1.7rem;
      text-transform: uppercase;
    }
  }
`;

export const CheckConfirm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (min-width: 48rem) {
    flex-direction: row;
    gap: 2rem;
    margin-top: 2rem;
  }

  .check {
    width: 4rem;
    height: 4rem;

    border-radius: 50%;
    border: 1px solid ${(props) => props.theme.primary};

    display: flex;
    align-items: center;
    justify-content: center;
  }

  span {
    font-size: 1.4rem;
    line-height: 1.7rem;
    font-weight: bold;
    color: ${(props) => props.theme.primary};
    text-transform: uppercase;
    margin-top: 1rem;
  }
`;
