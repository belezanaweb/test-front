import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;

  div {
    width: 100%;
  }

  h2 {
    text-transform: uppercase;
    color: ${(props) => props.theme.types.title};
    font-size: 1.4rem;
    font-weight: bold;
    margin: 1rem 0 0.5rem;
  }
`;

export const CartContent = styled.div`
  @media (min-width: 48rem) {
    display: grid;
    grid-template-columns: 70% 1fr;
    grid-template-rows: 35% 1fr;
    gap: 2rem;

    grid-template-areas:
      'list sumInfo'
      'list button';
  }
`;
