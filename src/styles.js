import styled from 'styled-components';

export const Content = styled.div`
  width: 100%;
  font-size: 1em;
  font-family: ${props => props.theme.font.main};

  @media (min-width: ${props => props.theme.screenSizes.mobile}px) {
    max-width: 1024px;
  }
`;
