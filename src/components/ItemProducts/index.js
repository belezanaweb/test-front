import React from 'react'
import { BoxProduct, ContainerProducts, ImageProduct, PriceProduct, TitleProduct } from './style'

/*
    Component for Product Container
    Props:
    imgProduct - Product Image
    titleProduct - Main Title Product
    priceProduct - Price Product
*/
const ItemProducts = (props) => {
  return (
    <>
      <ContainerProducts>
        <BoxProduct>
          <ImageProduct imgProduct={props.imgProduct} />
          <TitleProduct>{props.titleProduct}</TitleProduct>
          <PriceProduct>{props.priceProduct}</PriceProduct>
        </BoxProduct>
      </ContainerProducts>
    </>
  )
}

ItemProducts.prototype = {
  imgProduct: PropTypes.string.isRequired,
  titleProduct: PropTypes.string.isRequired,
  priceProduct: PropTypes.number.isRequired
}

export default ItemProducts
