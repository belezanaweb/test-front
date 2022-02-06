import React, { useEffect, useState } from 'react'
import { api } from '../../services/'
import { ContainerProducts } from './style.js'
import { Button, Description, ItemProduct, SpecificationCart } from '../../components'
import { Grid } from '@mui/material'

function Cart() {
  const [arrayProducts, setArrayProducts] = useState([])
  const [totalCart, setTotalCart] = useState({})

  useEffect(
    () => {
      getProducts()
    },
    [setArrayProducts],
    [setTotalCart]
  )

  useEffect(() => {
    console.log('arrayproducts', arrayProducts)
  }, [arrayProducts])

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
        total: resp.data.total
      }

      setTotalCart(totalCart)
    })
  }

  return (
    <>
      <Grid container>
        <Grid container>
          <Description title={'PRODUTOS'} />
          <ContainerProducts>
            {arrayProducts.map((product, index) => (
              <ItemProduct
                key={index}
                imgProduct={product.imgProduct}
                titleProduct={product.titleProduct}
                priceProduct={product.priceProduct}
              />
            ))}
          </ContainerProducts>
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
          <Button textButton={'SEGUIR PARA O PAGAMENTO'} />
        </Grid>
      </Grid>
    </>
  )
}

export default Cart
