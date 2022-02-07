import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { TitleBuySucess, GridContainer, ImgSucess, GridFooter } from './style'
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
  const dataCreditCard = useSelector((state) => state.creditcard)

  const hideNumCreditCard = (numCreditCard) => {
    let hideNum = []
    for (let i = 0; i < numCreditCard.length; i++) {
      if (i < numCreditCard.length - 4) {
        hideNum.push('*')
      } else {
        hideNum.push(numCreditCard[i])
      }
    }
    return hideNum.join('')
  }

  return (
    <>
      <Header typeTab={'CONFIRMACAO'} />
      <GridContainer container alignContent="center">
        <Grid item xs={12}>
          <Grid container>
            <Grid container justifyContent="center">
              <ImgSucess>
                <ConfirmationIcon />
              </ImgSucess>
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
                  numberCreditCard={hideNumCreditCard(dataCreditCard.numCreditCard)}
                  nameCreditCard={dataCreditCard.nameCreditCard}
                  expirationDate={dataCreditCard.expirationDate}
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
            <GridFooter container>
              <Grid item xs={12}>
                <SpecificationCart
                  subTotal={totalCartDucks.subTotal}
                  shippingTotal={totalCartDucks.shippingTotal}
                  discount={totalCartDucks.discount}
                  total={totalCartDucks.total}
                />
              </Grid>
            </GridFooter>
          </Grid>
        </Grid>
      </GridContainer>
    </>
  )
}

export default Confirmation
