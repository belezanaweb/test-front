import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '../../store'
import { fetchCartProducts } from '../../ducks/cart'

import Cart from '../../../pages/Cart'

export const CartContainer = () => {
  const dispatch = useDispatch()
  const { data } = useSelector((state: RootState) => state.cart)

  const { items, ...rest } = data

  useEffect(() => {
    dispatch(fetchCartProducts())
  }, [dispatch])

  return <Cart productItems={items} productData={rest} />
}
