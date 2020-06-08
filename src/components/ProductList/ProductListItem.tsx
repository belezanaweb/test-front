import React from 'react';
import styled from 'styled-components';

import Product from '../../types/Product';
import { toMoney } from '../../utils/number';

import Segment from '../Segment';
import Text from '../Text';

export const StyledItem = styled(Segment)`
  border-color: ${({ theme }) => theme.colors.grayExtraLight};
  display: flex;
  margin-bottom: 15px;
  padding: 11px 11px 12px;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex: 0 65px;
`;

export const Image = styled.img`
  height: 65px;
`;

export const Details = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 0 0 10px;
`;

export const ItemName = styled(Text)`
  color: ${({ theme }) => theme.colors.grayExtraDark};
  font-size: 13px;
`;

export const ItemPrice = styled(Text).attrs({ 'aria-label': 'price' })`
  align-self: flex-end;
  color: ${({ theme }) => theme.colors.grayExtraDark};
  font-weight: 700;
  letter-spacing: -0.075em;
  line-height: 17px;
`;

interface ItemProps {
  data: Product;
}

export const ProductListItem: React.FC<ItemProps> = ({ data }) => {
  const { imageObjects, name, priceSpecification } = data;

  function renderImage() {
    const image = imageObjects[0];
    return (
      <ImageWrapper>
        <Image
          src={image.large}
          alt="Imagem Ilustrativa"
        />
      </ImageWrapper>
    )
  }

  return (
    <StyledItem>
      {renderImage()}
      <Details>
        <ItemName>{name}</ItemName>
        <ItemPrice>{toMoney(priceSpecification.price)}</ItemPrice>
      </Details>
    </StyledItem>
  );
}

export default ProductListItem;
