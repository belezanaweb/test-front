import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { api } from '../../services/'
import { ContainerProducts } from './style.js'
import { Button, Description, ItemProduct, SpecificationCart, Header } from '../../components'
import { Grid } from '@mui/material'

function Cart() {
  const [products, setProducts] = useState([])
  const [totalCart, setTotalCart] = useState({})

  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(
    () => {
      getProducts()
    },
    [setProducts],
    [setTotalCart]
  )

  useEffect(() => {
    dispatch({ type: 'products/ADD_LIST_PRODUCTS', products: products })
  }, [products])

  useEffect(() => {
    dispatch({ type: 'products/ADD_SPECIFICATION_TOTAL', specifications: totalCart })
  }, [totalCart])

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

  const onClickGoToPayment = () => {
    navigate('/payment')
  }

  return (
    <>
      <Header typeTab={'SACOLA'} />
      <Grid container alignContent="center" style={{ marginTop: '14%' }}>
        <Grid item xs={12}>
          <Grid container>
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
              <Button textButton={'SEGUIR PARA O PAGAMENTO'} onClick={() => onClickGoToPayment()} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default Cart
