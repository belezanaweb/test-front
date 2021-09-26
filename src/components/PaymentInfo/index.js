import React from 'react'
import { useSelector } from 'react-redux'

/**
 * Reducers
 */
import { selectCartCreditCardInfos } from '../../store/reducers/checkout'

/**
 * Helpers
 */
// import { formatCoinStr } from '../../helpers'

/**
 * Components
 */
import { Title } from '../Utils/styles'
// import Picture from '../Picture'

/**
 * Styles
 */
import { ContainerPaymentInfo, Wrapper, Info } from './styles'

const PaymentInfo = () => {
  const creditCardInfos = useSelector(selectCartCreditCardInfos)

  const resolveNumber = () => {
    try {
      const numberStr = creditCardInfos.number.toString()
      const lastPart = numberStr.substring(12, 16)
      return `****.****.****.${lastPart}`
    } catch (error) {
      console.log(error)
      return ''
    }
  }

  const resolveValidity = () => {
    try {
      const validityStr = creditCardInfos.validity.toString()
      const month = validityStr.substring(0, 2)
      const year = validityStr.substring(2, 6)
      return `${month}/${year}`
    } catch (error) {
      console.log(error)
      return ''
    }
  }

  return (
    <ContainerPaymentInfo>
      <Title>Payment</Title>
      <Wrapper>
        <Info>{resolveNumber()}</Info>
        <Info>{creditCardInfos.name}</Info>
        <Info>{resolveValidity()}</Info>
      </Wrapper>
    </ContainerPaymentInfo>
  )
}

export default PaymentInfo
