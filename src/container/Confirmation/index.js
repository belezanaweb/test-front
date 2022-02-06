import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { TitleBuySucess } from './style'
import { ContainerProducts } from '../Cart/style'
import {
  SpecificationDataUser,
  ItemProduct,
  Description,
  SpecificationCart,
  Header
} from '../../components'
import { Grid } from '@mui/material'
import { ReactComponent as ConfirmationIcon } from '../../assets/icon/confirmation_icon.svg'

function Confirmation() {
  const totalCartDucks = useSelector((state) => state.products.specifications)
  const productsDucks = useSelector((state) => state.products.products)

  return (
    <>
      <Header typeTab={'CONFIRMACAO'} />
      <Grid container alignContent="center" style={{ marginTop: '14%' }}>
        <Grid item xs={12}>
          <Grid container>
            <Grid container justifyContent="center">
              <ConfirmationIcon style={{ fill: '#FF7800', width: '11%' }} />
            </Grid>
            <Grid container>
              <Grid item xs={12}>
                <TitleBuySucess>COMPRA EFETUADA COM SUCESSO</TitleBuySucess>
              </Grid>
            </Grid>
            <Description title={'PAGAMENTO'} />
            <Grid container justifyContent="center">
              <Grid item xs={12}>
                <SpecificationDataUser
                  numberCreditCard={'****.****.****.1234'}
                  nameCreditCard={'JOSÉ DA SILVA'}
                  expirationDate={'05/2019'}
                />
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={12}>
                <Description title={'PRODUTOS'} />
              </Grid>
              <Grid item xs={12}>
                <ContainerProducts>
                  {productsDucks.map((product, index) => (
                    <ItemProduct
                      key={index}
                      imgProduct={product.imgProduct}
                      titleProduct={product.titleProduct}
                      priceProduct={product.priceProduct}
                    />
                  ))}
                </ContainerProducts>
              </Grid>
            </Grid>
            <Grid container style={{ marginBottom: '60px' }}>
              <Grid item xs={12}>
                <SpecificationCart
                  subTotal={totalCartDucks.subTotal}
                  shippingTotal={totalCartDucks.shippingTotal}
                  discount={totalCartDucks.discount}
                  total={totalCartDucks.total}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default Confirmation
