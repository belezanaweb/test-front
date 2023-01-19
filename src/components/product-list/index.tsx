import React from 'react';
import styled from 'styled-components';
import Title from '../title';
import ProductCard from '../product-card';
import { useBasket } from '../../services/basket/hooks';
interface props {
  sizeImage?: string,
  isShowPrice?: boolean
}
interface productPrice {
  priceSpecification: {
    price: number;
  }
}

const ProductList: React.FC<props> = ({sizeImage = "small", isShowPrice = true}) => {
  const { basket }  = useBasket();
  return (
    <>
    <Title>PRODUTOS</Title>
    <Container>
      {basket?.items?.map(item => {
        return <ProductCard {...item.product} sizeImage={sizeImage} isShowPrice={isShowPrice} />
      })}
    </Container>
    </>
  );
};

const Container = styled.div`
    border-radius: 3px;
    background-color: #FFF;
    box-shadow: 1px 1px 5px 0 rgba(0,0,29,0.22);
    padding: 12px;
    margin: 0 0 20px;
    div:last-child {
      margin: 0
    }
`;


export default ProductList;