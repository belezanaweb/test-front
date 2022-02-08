import React from 'react'
import PropTypes from 'prop-types'
import { BoxProduct, ImageProduct, PriceProduct, TitleProduct } from './style'
import { Grid } from '@mui/material'

/*
    Component for Product Container
    Props:
    imgProduct - Product Image
    titleProduct - Main Title Product
    priceProduct - Price Product
*/

//padding 10 grid container
const ItemProducts = (props) => {
  const { imgProduct, titleProduct, priceProduct } = props
  return (
    <>
      <BoxProduct>
        <Grid container>
          <Grid item xs={3}>
            <ImageProduct imgProduct={imgProduct} />
          </Grid>
          <Grid item xs={9}>
            <Grid container>
              <Grid item xs={12}>
                <TitleProduct>{titleProduct}</TitleProduct>
              </Grid>
              <Grid item xs={12}>
                <PriceProduct>
                  {priceProduct > 0
                    ? priceProduct.toLocaleString('pt-br', {
                        style: 'currency',
                        currency: 'BRL'
                      })
                    : 'R$0,00'}
                </PriceProduct>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </BoxProduct>
    </>
  )
}

ItemProducts.prototype = {
  imgProduct: PropTypes.string.isRequired,
  titleProduct: PropTypes.string.isRequired,
  priceProduct: PropTypes.number.isRequired
}

export default ItemProducts
