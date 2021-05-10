import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { setCartItems } from '../../actions/cartActios'
import { List, Typography } from '../../components'
import { getCartItems } from '../../services/cart'

import { Container, CardProducts, Title } from './styles.css'

const Cart = () => {
  const { infos } = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  useEffect(() => {
    const getData = async () => {
      const { data } = await getCartItems()
      dispatch(setCartItems(data))
    }

    getData()
  }, [dispatch])

  console.log(infos)

  return (
    <Container>
      <Title>
        <Typography>Produtos</Typography>
      </Title>
      <CardProducts>
        <List
          items={infos.items?.map((item) => ({
            key: item.product.sku,
            imageURL: item.product.imageObjects[0].thumbnail, //TODO validate size image
            name: item.product.name,
            price: item.product.priceSpecification.price
          }))}
        />{' '}
      </CardProducts>
    </Container>
  )
}

export default Cart
