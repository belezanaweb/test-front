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
      text-transform: uppercase;
    }
  }
`;

export const CheckConfirm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .check {
    width: 4rem;
    height: 4rem;

    border-radius: 50%;
    border: 1px solid ${(props) => props.theme.colors.primary};

    display: flex;
    align-items: center;
    justify-content: center;
  }

  span {
    font-size: 1.4rem;
    line-height: 1.7rem;
    font-weight: bold;
    color: ${(props) => props.theme.colors.primary};
    text-transform: uppercase;
    margin-top: 1rem;
  }
`;
