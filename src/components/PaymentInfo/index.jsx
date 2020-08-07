
import React, { useMemo } from 'react'
import styled from "@emotion/styled"
import { usePayment } from '../../context/PaymentProvider';
import { Card } from '../Card';

const Info = styled.span`
  display: block;
`

const PaymentInfo = () => {
  const { paymentData } = usePayment();
  
  const cardNumber = useMemo(() =>  {
    return paymentData.cardNumber
      .split(" ")
      .map((ele, index, array) => ((array.length - 1) !== index) ? ele.replace(/\w/g,'*') : ele )
      .join(" . ");
  }, [paymentData])
  
  return (
    <Card>
      <Info> { cardNumber } </Info>
      <Info> { paymentData.cardName } </Info>
      <Info> { paymentData.cardExpiress } </Info>
    </Card>
  )
}

export default PaymentInfo