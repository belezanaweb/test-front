import React, { useEffect, useState } from 'react'
import { api } from '../../services/'
import { BoxPaymentData } from './style'
import { PaymentData } from '../../components'
import { Button, Description, SpecificationCart } from '../../components'
import { Grid } from '@mui/material'

function Payment() {
  const [arrayProducts, setArrayProducts] = useState([])
  const [totalCart, setTotalCart] = useState({})

  useEffect(
    () => {
      getProducts()
    },
    [setArrayProducts],
    [setTotalCart]
  )

  const getProducts = async () => {
    await api.get('/5b15c4923100004a006f3c07').then((resp) => {
      console.log('getproducts', resp)
      resp.data.items.forEach((item) => {
        let product = {
          titleProduct: item.product.name,
          imgProduct: item.product.imageObjects[0].extraLarge,
          priceProduct: item.product.priceSpecification.price
        }
        setArrayProducts((arrayProducts) => [...arrayProducts, product])
      })
      let totalCart = {
        subTotal: resp.data.subTotal,
        shippingTotal: resp.data.shippingTotal,
        discount: resp.data.discount,
        total: resp.data.subTotal + resp.data.shippingTotal - resp.data.discount
      }

      setTotalCart(totalCart)
    })
  }

  return (
    <>
      <Grid container>
        <Grid container id="gridContainerCard">
          <Description title={'CARTÃO DE CRÉDITO'} />
          <BoxPaymentData>
            <PaymentData />
          </BoxPaymentData>
        </Grid>
        <Grid container>
          <Grid item xs={12}>
            <SpecificationCart
              subTotal={totalCart.subTotal}
              shippingTotal={totalCart.shippingTotal}
              discount={totalCart.discount}
              total={totalCart.total}
            />
          </Grid>
        </Grid>
        <Grid container justifyContent="center">
          <Button textButton={'FINALIZAR O PEDIDO'} />
        </Grid>
      </Grid>
    </>
  )
}

export default Payment
