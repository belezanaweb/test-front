import React from 'react'
import { useSelector } from 'react-redux'

import { RootState } from '../../store'
import Success from '../../../pages/Success'

export const SuccessContainer = () => {
  const { data } = useSelector((state: RootState) => state.cart)
  const card = useSelector((state: RootState) => state.creditCard)

  const { items, ...rest } = data

  return <Success productItems={items} productData={rest} cardData={card} />
}
