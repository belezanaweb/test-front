import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '../../store'
import { getProducts } from '../../modules/cart/actions'

import ProductList from '../../../ui/components/ValuesBox'

const CartValuesContainer = () => {
  const dispatch = useDispatch()
  const data = useSelector((state: RootState) => state.cart)

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  return (
    <ProductList
      subTotal={data.subTotal}
      shippingTotal={data.shippingTotal}
      discount={data.discount}
      total={data.total}
    />
  )
}

export default CartValuesContainer
