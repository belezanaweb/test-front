import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import * as palette from './../../styles/variables'
import SummaryCart from '../../components/SummaryCart/SummaryCart'
import BButton from '../../components/Button/Button'
import PaymentForm from '../../containers/PaymentForm/PaymentForm'

export default function Payment(props) {
  let history = useHistory()

  function toCheckout() {
    history.push('/checkout')
  }

  const Container = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 6px 12px 0 12px;
    box-shadow: 1px 1px 5px 0px rgba(0, 0, 29, 0.22);
    flex-direction: column;
    background-color: ${palette.BACKGROUND_CONTAINERS};
  `

  const TitleCart = styled.h1`
    margin-left: 12px;
    font-size: ${palette.FONTSIZE_2};
    font-family: ${palette.FONT_FAMILY};
    font-weight: bold;
    color: #999;
  `

  return (
    <>
      <TitleCart> CARTÃO DE CRÉDITO </TitleCart>
      <Container>
        <PaymentForm />
      </Container>
      <SummaryCart />
      <BButton onClick={() => toCheckout()}> {'FINALIZAR O PEDIDO'} </BButton>
    </>
  )
}
