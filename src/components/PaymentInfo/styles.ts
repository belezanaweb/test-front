import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    text-transform: uppercase;
    color: ${(props) => props.theme.title};
    font-size: 1.4rem;
    font-weight: bold;

    margin: 1rem 0 0.5rem;
  }

  @media (min-width: 48rem) {
    grid-area: method;
  }

  div {
    background-color: white;
    box-shadow: 0.1rem 0.1rem 0.5rem 0 ${(props) => props.theme.shadow};
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
