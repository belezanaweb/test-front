import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '../../store'
import { getProducts } from '../../modules/cart/actions'

import Cart from '../../../screens/Cart'

const CartContainer = () => {
  const dispatch = useDispatch()
  const data = useSelector((state: RootState) => state.cart)

  const { items, ...rest } = data

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  return <Cart products={items} productData={rest} />
}

export default CartContainer
