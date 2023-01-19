import React from 'react';
import styled from 'styled-components';
import Image from '../image';
import { ProductBasketItems } from '../../services/basket/types';

interface ProductCardData extends ProductBasketItems {
    sizeImage: string,
    isShowPrice: boolean
}

const ProductCard: React.FC<ProductCardData> = ({imageObjects, name, priceSpecification, sizeImage, isShowPrice}) => {
  return (
    <Container>
        <Image imageObjects={imageObjects} sizeImage={sizeImage} />
        <ProductionDescription>
            <Title>{name}</Title>
            {isShowPrice && <Price>R$ { priceSpecification.price.toFixed(2) } </Price> }
        </ProductionDescription>
    </Container>
  );
};

const ProductionDescription = styled.div`
    display: block;
    flex: 1;
`
const Container = styled.div`
    box-sizing: border-box;
    border-radius: 3px;
    border: 1px solid #EEE;
    display: flex;
    margin: 0 0 15px;
    padding: 12px 9px;

`;

const Title = styled.h2`
    color: #212122;
    font-size: 13px;
    line-height: 16px;
`
const Price = styled.p`
    color: #212122;
    font-size: 14px;
    font-weight: 700;
    line-height: 17px;
    text-align: right;
    margin: 15px 0 0;
`
export default ProductCard;