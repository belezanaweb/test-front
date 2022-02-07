import React from 'react'
import PropTypes from 'prop-types'
import { ContainerSCart, DescriptionSCart, GridContainerLine } from './style'
import { Grid } from '@mui/material'

/*
    Component for Specification Cart
    Props:
    subTotal - Total of the list of products without discount
    shippingTotal - Shipping of list products
    discount - Discont applied for products
    total - Total price of list products
*/
const SpecificationCart = (props) => {
  const { subTotal, shippingTotal, discount, total } = props
  return (
    <>
      <ContainerSCart>
        <GridContainerLine container marginTop={'5%'}>
          <Grid item xs={6}>
            <DescriptionSCart colortext={'#212122'}>PRODUTOS</DescriptionSCart>
          </Grid>
          <Grid item xs={6}>
            <DescriptionSCart colortext={'#212122'} textAlign>
              {subTotal > 0
                ? subTotal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
                : 'R$0,00'}
            </DescriptionSCart>
          </Grid>
        </GridContainerLine>
        <GridContainerLine container marginTop={'3%'}>
          <Grid item xs={6}>
            <DescriptionSCart colortext={'#212122'}>FRETE</DescriptionSCart>
          </Grid>
          <Grid item xs={6}>
            <DescriptionSCart colortext={'#212122'} textAlign>
              {shippingTotal > 0
                ? shippingTotal.toLocaleString('pt-br', {
                    style: 'currency',
                    currency: 'BRL'
                  })
                : 'R$0,00'}
            </DescriptionSCart>
          </Grid>
        </GridContainerLine>
        <GridContainerLine container marginTop={'3%'}>
          <Grid item xs={6}>
            <DescriptionSCart colortext={'#FF7800'}>DESCONTO</DescriptionSCart>
          </Grid>
          <Grid item xs={6}>
            <DescriptionSCart colortext={'#FF7800'} textAlign>
              {discount > 0
                ? '- ' + discount.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
                : 'R$ 0,00'}
            </DescriptionSCart>
          </Grid>
        </GridContainerLine>
        <GridContainerLine container marginTop={'5%'}>
          <Grid item xs={6}>
            <DescriptionSCart colortext={'#212122'} bold="true">
              TOTAL
            </DescriptionSCart>
          </Grid>
          <Grid item xs={6}>
            <DescriptionSCart colortext={'#212122'} textAlign bold="true">
              {total > 0
                ? total.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
                : 'R$ 0,00'}
            </DescriptionSCart>
          </Grid>
        </GridContainerLine>
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
