import React from 'react';
import styled from 'styled-components';
import Title from '../title';
import ProductCard from '../product-card';

const ProductList: React.FC = () => {
  return (
    <>
    <Title text="PRODUTOS" />
    <Container>
        <ProductCard />
        <ProductCard />
        <ProductCard />
    </Container>
    </>
  );
};

const Container = styled.header`
    height: 325px;
    width: 341px;
    border-radius: 3px;
    background-color: #FFF;
    box-shadow: 1px 1px 5px 0 rgba(0,0,29,0.22);
    padding: 12px;
    margin: 0 0 20px;
`;


export default ProductList;