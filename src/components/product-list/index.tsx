import React from 'react';
import styled from 'styled-components';
import Title from '../title';
import ProductCard from '../product-card';
import { useBasket } from '../../services/basket/hooks';
import * as S from './styles'

interface props {
  sizeImage?: string,
  isShowPrice?: boolean
}

const ProductList: React.FC<props> = ({sizeImage = "small", isShowPrice = true}) => {
  const { basket }  = useBasket();
  return (
    <>
    <Title>PRODUTOS</Title>
    <S.Container>
      {basket?.items?.map(item => {
        return <ProductCard {...item.product} sizeImage={sizeImage} isShowPrice={isShowPrice} />
      })}
    </S.Container>
    </>
  );
};

export default ProductList;