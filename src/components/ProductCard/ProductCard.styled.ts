import styled from 'styled-components'

export const ProductCardStyled = styled.div`
  display: flex;
  gap: 15px;
`;

export const ProductCardThumb = styled.div`
  border-radius: 8px;
  img {
    width: 60px;
    height: 60px;
  }
`;

export const ProductCardTitle = styled.div`
  margin: 5px 0;
  font-size: 12px;
  flex: 1;
`;

export const ProductCardPrice = styled.div`
  display: flex;
  align-items: end;
  justify-content: center;
  flex-direction: column;
  font-size: 14px;
`;
export const ProductCardPriceFrom = styled.span`
  color: ${props => props.theme.colors.gray[200]};
  text-decoration: line-through;
`;
export const ProductCardPriceTo = styled.strong`

`;