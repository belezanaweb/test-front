import React from 'react'
import { STEPS } from '../../util/constants'
import { Container, Step } from './styles'

const { SACOLA, PAGAMENTO, CONFIRMAÇÃO } = STEPS

const Header = ({ step, setStep, form }) => {
  const isStepPayment = step === PAGAMENTO

  return (
    <Container>
      <Step
        isSelected={step === SACOLA}
        onClick={() => {
          isStepPayment ? form.submitForm() : setStep(SACOLA)
        }}
      >
        {SACOLA}
      </Step>
      <Step isSelected={isStepPayment} onClick={() => setStep(PAGAMENTO)}>
        {PAGAMENTO}
      </Step>
      <Step
        isSelected={step === CONFIRMAÇÃO}
        onClick={() => {
          isStepPayment ? form.submitForm() : setStep(CONFIRMAÇÃO)
        }}
      >
        {CONFIRMAÇÃO}
      </Step>
    </Container>
  )
}

export default Header
