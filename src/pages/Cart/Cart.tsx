import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '../../redux/store'
import { fetchCartProducts } from '../../redux/ducks/cart'

export const Cart = () => {
  const dispatch = useDispatch()
  const cart = useSelector((state: RootState) => state.cart)

  useEffect(() => {
    dispatch(fetchCartProducts())
  }, [dispatch])

  return (
    <>
      <h1>Cart</h1>
      {cart?.data?.items?.map((item) => {
        return <p key={item.product.sku}>{item.product.name}</p>
      })}
    </>
  )
}
