import React, { useEffect, useState } from 'react'
import { api } from '../../services/'
import { TitleBuySucess } from './style'
import { ContainerProducts } from '../Cart/style'
import {
  SpecificationDataUser,
  ItemProduct,
  Description,
  SpecificationCart
} from '../../components'
import { Grid } from '@mui/material'
import { ReactComponent as ConfirmationIcon } from '../../assets/icon/confirmation_icon.svg'

function Confirmation() {
  const [products, setProducts] = useState([])
  const [totalCart, setTotalCart] = useState({})

  useEffect(
    () => {
      getProducts()
    },
    [setProducts],
    [setTotalCart]
  )

  const getProducts = async () => {
    await api.get('/5b15c4923100004a006f3c07').then((resp) => {
      resp.data.items.forEach((item) => {
        let product = {
          titleProduct: item.product.name,
          imgProduct: item.product.imageObjects[0].extraLarge,
          priceProduct: item.product.priceSpecification.price
        }
        setProducts((products) => [...products, product])
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
              {products.map((product, index) => (
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
              subTotal={totalCart.subTotal}
              shippingTotal={totalCart.shippingTotal}
              discount={totalCart.discount}
              total={totalCart.total}
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default Confirmation
