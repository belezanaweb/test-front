import styled from 'styled-components'

export const ProductListStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ProductListHeading = styled.h3`
  ${props => props.theme.typography.heading};
  margin: 0;
`;
