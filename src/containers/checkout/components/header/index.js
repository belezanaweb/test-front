import React from 'react'
import { STEPS } from '../../util/constants'
import { Container, Step } from './styles'

const { SACOLA, PAGAMENTO, CONFIRMAÇÃO } = STEPS

const Header = ({ step, setStep }) => {
  return (
    <Container>
      <Step isSelected={step === SACOLA} onClick={() => setStep(SACOLA)}>
        {SACOLA}
      </Step>
      <Step isSelected={step === PAGAMENTO} onClick={() => setStep(PAGAMENTO)}>
        {PAGAMENTO}
      </Step>
      <Step isSelected={step === CONFIRMAÇÃO} onClick={() => setStep(CONFIRMAÇÃO)}>
        {CONFIRMAÇÃO}
      </Step>
    </Container>
  )
}

export default Header
