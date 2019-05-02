import styled from 'styled-components';
import { Container as ContainerCard } from '../components/Card/styles';

export const Container = styled.div`
  margin: 0 10px 0 9px;

  ${ContainerCard}:nth-child(2) {
    margin-bottom: 6px;
  }

  @media(min-width: ${props => props.theme.screenSizes.tablet}px) {
    display: flex;
    margin-top: 20px;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Main = styled.div`
  flex-grow: 1;
`;

export const Aside = styled.div`
  display: flex;
  flex-direction: column;

  @media(min-width: ${props => props.theme.screenSizes.tablet}px) {
    width: 30%;
    padding-top: 12px;
    margin-left: 12px;
    justify-content: space-between;
  }
`;
