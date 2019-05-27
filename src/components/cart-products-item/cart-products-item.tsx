import * as React from 'react';
import styled from 'styled-components';

import { Item } from '../../models/item.model';
import { convertToCurrencyNumber } from '../../utils';

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  width: 100%;
  padding: 10px;
  border-radius: 3px;
  border: 1px solid #EEE;

  &:not(:last-child) {
    margin-bottom: 15px;
  }
`

const Image = styled.img`
  flex: 0 0 65px;
  object-fit: contain;
  width: 65px;
  height: auto;
  margin-right: 10px;
`

const ItemContent = styled.div`
  flex: 1 1 auto;
`

const Title = styled.h3`
  color: #212122;
  font-size: 13px;
  line-height: 16px;
  font-weight: normal;
  margin-bottom: 15px;
`

const Price = styled.strong`
  display: block;
  text-align: right;
`

const CartProductsItem: React.FC<{
  item: Item,
}> = ({ item }) => (
  <ItemWrapper>
    <Image src={item!.product!.imageObjects[0].thumbnail} /> {/* @Todo - responsive and size image */ }
    <ItemContent>
      <Title>{item.product.name}</Title>
      <Price>{convertToCurrencyNumber(item.product.priceSpecification.price)}</Price>
    </ItemContent>
  </ItemWrapper>
)

export default CartProductsItem;
