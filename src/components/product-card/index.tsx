import React from 'react';
import Image from '../image';
import { ProductBasketItems } from '../../services/basket/types';
import * as S from './styles'

interface ProductCardData extends ProductBasketItems {
    sizeImage: string,
    isShowPrice: boolean
}

const ProductCard: React.FC<ProductCardData> = ({imageObjects, name, priceSpecification, sizeImage, isShowPrice}) => {
  return (
    <S.Container>
        <Image imageObjects={imageObjects} sizeImage={sizeImage} />
        <S.ProductionDescription>
            <S.Title>{name}</S.Title>
            {isShowPrice && <S.Price>R$ { priceSpecification.price.toFixed(2) }</S.Price> }
        </S.ProductionDescription>
    </S.Container>
  );
};

export default ProductCard;