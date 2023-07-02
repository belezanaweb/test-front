import React, { ReactNode } from 'react'
import { ContentWrap, ResumeWrapper } from './styles'
import Button from '../Button'
import Text from '../Text'
import { moneyConvert } from '../../utils/priceUtils'
import theme from '../../theme'

export type paymentResumeProps = {
  itemsQuantity: number,
  total: number,
  shippingTotal: number,
  discount: number,
  subTotal: number,
  buttonLable: string,
  buttonColor?: keyof typeof theme.colors,
  rowStart?: number,
  onClick?: () => void
}

const PaymentResume = ({
  discount,
  itemsQuantity,
  shippingTotal,
  subTotal,
  total,
  buttonLable,
  buttonColor,
  rowStart,
  onClick
}: paymentResumeProps) => {
  return (
    <ContentWrap rowStart={rowStart}>
      <ResumeWrapper>
        <Text
          color="black"
          fontSize="medium"
          fontWeight="normal"
          textAlign="left"
          lineHeight="medium"
          letterSpacing="0.27px"
        >
          {`Produtos: (${itemsQuantity} items)`}
        </Text>
        <Text
          color="black"
          fontSize="medium"
          fontWeight="normal"
          textAlign="right"
          lineHeight="medium"
          letterSpacing="0.27px"
        >
          {moneyConvert(total)}
        </Text>
        <Text
          color="black"
          fontSize="medium"
          fontWeight="normal"
          textAlign="left"
          lineHeight="medium"
          letterSpacing="0.27px"
        >
          Frete:
        </Text>
        <Text
          color="black"
          fontSize="medium"
          fontWeight="normal"
          textAlign="right"
          lineHeight="medium"
          letterSpacing="0.27px"
        >
          {moneyConvert(shippingTotal)}
        </Text>
        <Text
          color="black"
          fontSize="medium"
          fontWeight="normal"
          textAlign="left"
          lineHeight="medium"
          letterSpacing="0.27px"
        >
          Desconto:
        </Text>
        <Text
          color="purple"
          fontSize="medium"
          fontWeight="bold"
          textAlign="right"
          lineHeight="medium"
          letterSpacing="0.27px"
        >
          {moneyConvert(discount)}
        </Text>
        <Text
          color="black"
          fontSize="xmedium"
          fontWeight="bold"
          textAlign="left"
          lineHeight="medium"
          letterSpacing="0.27px"
        >
          Subtotal
        </Text>
        <Text
          color="black"
          fontSize="xmedium"
          fontWeight="bold"
          textAlign="right"
          lineHeight="medium"
          letterSpacing="0.27px"
        >
          {moneyConvert(subTotal)}
        </Text>
      </ResumeWrapper>
      <Button onClick={onClick} type="submit" backgroundColor={buttonColor}>
        <Text
          color="white"
          fontSize="large"
          fontWeight="bold"
          textAlign="center"
          lineHeight="medium"
        >
          {buttonLable}
        </Text>
      </Button>
    </ContentWrap>
  )
}

export default PaymentResume
