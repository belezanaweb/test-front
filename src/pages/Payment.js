import React, { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'

import { Button, Summary, CreditCardForm } from '../components'
import { Container } from '../styles/globalStyle'

import { useCreditCardForm } from '../contexts/useCreditCardForm'

export function Payment() {
  let navigate = useNavigate()
  const {
    creditCardNumberHelperText,
    nameHelperText,
    dateValidateHelperText,
    cvvHelperText
  } = useCreditCardForm()

  const isFormValid = useMemo(() => {
    let valid = false

    if (
      !creditCardNumberHelperText &&
      !nameHelperText &&
      !dateValidateHelperText &&
      !cvvHelperText
    ) {
      valid = true
    }

    return valid
  }, [creditCardNumberHelperText, nameHelperText, dateValidateHelperText, cvvHelperText])

  const handleClick = () => {
    if (isFormValid) {
      navigate('/confirmation')
    }
  }

  return (
    <Container>
      <main>
        <CreditCardForm />
        <Summary />
        <Button disabled={!isFormValid} onClick={handleClick}>
          FINALIZAR O PEDIDO
        </Button>
      </main>
    </Container>
  )
}
