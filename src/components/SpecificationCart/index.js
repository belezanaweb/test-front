import React from 'react'
import PropTypes from 'prop-types'
import { ContainerSCart, DescriptionSCart } from './style'
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
  return (
    <>
      <ContainerSCart>
        <Grid container style={{ marginTop: '15px' }}>
          <Grid item xs={6}>
            <DescriptionSCart colortext={'#212122'}>PRODUTOS</DescriptionSCart>
          </Grid>
          <Grid item xs={6}>
            <DescriptionSCart colortext={'#212122'} textAlign>
              {props.subTotal > 0
                ? props.subTotal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
                : 'R$0,00'}
            </DescriptionSCart>
          </Grid>
        </Grid>
        <Grid container style={{ marginTop: '8px' }}>
          <Grid item xs={6}>
            <DescriptionSCart colortext={'#212122'}>FRETE</DescriptionSCart>
          </Grid>
          <Grid item xs={6}>
            <DescriptionSCart colortext={'#212122'} textAlign>
              {props.shippingTotal > 0
                ? props.shippingTotal.toLocaleString('pt-br', {
                    style: 'currency',
                    currency: 'BRL'
                  })
                : 'R$0,00'}
            </DescriptionSCart>
          </Grid>
        </Grid>
        <Grid container style={{ marginTop: '8px' }}>
          <Grid item xs={6}>
            <DescriptionSCart colortext={'#FF7800'}>DESCONTO</DescriptionSCart>
          </Grid>
          <Grid item xs={6}>
            <DescriptionSCart colortext={'#FF7800'} textAlign>
              {props.discount > 0
                ? '- ' +
                  props.discount.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
                : 'R$ 0,00'}
            </DescriptionSCart>
          </Grid>
        </Grid>
        <Grid container style={{ marginTop: '16px' }}>
          <Grid item xs={6}>
            <DescriptionSCart colortext={'#212122'} bold="true">
              TOTAL
            </DescriptionSCart>
          </Grid>
          <Grid item xs={6}>
            <DescriptionSCart colortext={'#212122'} textAlign bold="true">
              {props.total > 0
                ? props.total.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
                : 'R$ 0,00'}
            </DescriptionSCart>
          </Grid>
        </Grid>
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
