import React from 'react'
import PropTypes from 'prop-types'
import { ContainerSCart, DescriptionSCart } from './style'

/*
    Component for Specification Cart
    Props:
    subTotal - Total of the list of products without discount
    shippingTotal - Shipping of list products
    discount - Discont applied for products
    total - Total price of list products
*/
const SpecificationCart = (props) => {
  return (
    <>
      <ContainerSCart>
        <DescriptionSCart ColorText={'#212122'}>PRODUTOS</DescriptionSCart>
        <DescriptionSCart ColorText={'#212122'} textAlign>
          {props.subTotal}
        </DescriptionSCart>
        <DescriptionSCart ColorText={'#212122'}>FRETE</DescriptionSCart>
        <DescriptionSCart ColorText={'#212122'} textAlign>
          {props.shippingTotal}
        </DescriptionSCart>
        <DescriptionSCart ColorText={'#FF7800'}>DESCONTO</DescriptionSCart>
        <DescriptionSCart ColorText={'#FF7800'} textAlign>
          {props.discount}
        </DescriptionSCart>
        <DescriptionSCart ColorText={'#212122'} bold>
          TOTAL
        </DescriptionSCart>
        <DescriptionSCart ColorText={'#212122'} textAlign bold>
          {props.total}
        </DescriptionSCart>
      </ContainerSCart>
    </>
  )
}

SpecificationCart.prototype = {
  subTotal: PropTypes.number.isRequered,
  shippingTotal: PropTypes.number.isRequered,
  discount: PropTypes.number.isRequered,
  total: PropTypes.number.isRequered
}

export default SpecificationCart
