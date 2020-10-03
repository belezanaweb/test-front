import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
  margin: 0 auto;
  width: var(--mobile-min-height-container);

  @media screen and (max-width: 340px) {
    width: 100%;
  }
`;
