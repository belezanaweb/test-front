import React from 'react'
import { ContainerProducts } from './PaymentInfo.style'

const PaymentInfo = (props) => {
  const { name, expiration, number } = props
  return (
    <ContainerProducts>
      <ul>
        <li>{number}</li>
        <li>{name}</li>
        <li>{expiration}</li>
      </ul>
    </ContainerProducts>
  )
}

export default PaymentInfo
