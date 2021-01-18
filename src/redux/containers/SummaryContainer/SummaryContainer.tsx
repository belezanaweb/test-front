import React from 'react'
import { useSelector } from 'react-redux'

import { RootState } from '../../store'
import Summary from '../../../screens/Summary'

const SummaryContainer = () => {
  const data = useSelector((state: RootState) => state.cart)
  const cardData = useSelector((state: RootState) => state.payment)

  const { items, ...props } = data

  return <Summary products={items} productData={props} cardData={cardData} />
}

export default SummaryContainer
