import React from 'react'
import { STEPS } from '../../util/constants'
import { Container, Step } from './styles'

const { CART, PAYMENT, CONFIRMATION } = STEPS

const Header = ({ step }) => {
  return (
    <Container>
      <Step isActivated={step === CART}>{CART}</Step>
      <Step isActivated={step === PAYMENT}>{PAYMENT}</Step>
      <Step isActivated={step === CONFIRMATION}>{CONFIRMATION}</Step>
    </Container>
  )
}

export default Header
