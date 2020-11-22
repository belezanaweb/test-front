import React from 'react'
import styled from 'styled-components'
import * as palette from './../../styles/variables'
import PaymentForm from '../../containers/PaymentForm/PaymentForm'

const TitleCart = styled.h1`
  margin-left: 12px;
  font-size: ${palette.FONTSIZE_2};
  font-family: ${palette.FONT_FAMILY};
  font-weight: bold;
  color: #999;
`

export default function Payment(props) {
  return (
    <>
      <TitleCart> CARTÃO DE CRÉDITO </TitleCart>
      <PaymentForm />
    </>
  )
}
