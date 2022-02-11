import styled from 'styled-components';

export const AppContainer = styled.main`
  width: 100%;
  height: 100vh;
  margin: 0 auto;

  // iPads, Tablets
  @media (min-width: 48rem) {
    width: 80%;
    margin: 0 auto;
  }

  // Small screens, laptops
  @media (min-width: 768rem) {
    width: 80%;
    margin: 0 auto;
  }

  // Desktops, large screens
  @media (min-width: 120rem) {
    width: 80%;
    margin: 0 auto;
  }
`;
