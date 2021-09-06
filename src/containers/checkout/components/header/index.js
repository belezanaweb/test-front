import React from 'react'
import useMedia from '../../../../hooks/useMedia'
import { STEPS } from '../../util/constants'
import { Container, Step, StyledImage } from './styles'

import logoImg from '../../../../assets/logo.svg'

const { CART, PAYMENT, CONFIRMATION } = STEPS

const Header = ({ step }) => {
  const isMedium = useMedia('(min-width: 600px)')

  return (
    <>
      <Container>
        {isMedium && <StyledImage src={logoImg} alt="Logo" />}

        <div className="steps">
          <Step isActivated={step === CART}>{CART}</Step>
          <Step isActivated={step === PAYMENT}>{PAYMENT}</Step>
          <Step isActivated={step === CONFIRMATION}>{CONFIRMATION}</Step>
        </div>
      </Container>
    </>
  )
}

export default Header
