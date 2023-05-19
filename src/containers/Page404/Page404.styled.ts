import styled from 'styled-components'
import { ContainerStyled } from '../../shared/Container/Container.styled';

export const NotFound = styled(ContainerStyled)`
  text-align: center;
  button {
    margin: 0 auto;
  }
`;

export const NotFoundTitle = styled.div`
  margin: 40px 0;
  font-size: 1.25rem;
  ${props => props.theme.typography.heading};
  strong {
    font-size: 1.625rem;
  }
`;