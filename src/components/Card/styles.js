import styled from 'styled-components';
import { Container as ContainerCardProduct } from '../CardProduct/styles';

export const Title = styled.p`
  margin: 0;
  height: 32px;
  font-size: 14px;
  line-height: 2.8;
  font-weight: bold;
  padding: 0 0 0 11px;
  color: ${props => props.theme.color.gray};
`;

export const Container = styled.div`
  flex-grow: 1;
`;

export const Content = styled.div`
  border-radius: 3px;
  padding: 12px 12px 13px;
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 29, 0.22);
  background-color: ${props => props.theme.color.white};

  ${ContainerCardProduct}:last-child {
    margin-bottom: 0;
  }

  @media(min-width: ${props => props.theme.screenSizes.tablet}px) {
    min-height: 120px;
  }
`;
