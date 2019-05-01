import styled from 'styled-components';

export const Content = styled.div`
  margin: 0 10px 0 9px;

  @media(min-width: ${props => props.theme.screenSizes.tablet}px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const Resume = styled.div`
  display: flex;
  flex-direction: column;

  @media(min-width: ${props => props.theme.screenSizes.tablet}px) {
    max-width: 280px;
    padding-top: 12px;
    margin-left: 12px;
    justify-content: space-between;
  }
`;
