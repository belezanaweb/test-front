import React from 'react'
import styled from 'styled-components'
import BInput from '../../components/Input/Input'
import * as palette from './../../styles/variables'

const Line = styled.div`
  display: flex;
  flex-direction: column;
`

const DoubleFieldsLine = styled(Line)`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  max-width: 100%;
`

function validateCreditCard(cardNumber) {
  if (cardNumber.length < 16) return false
  var numSum = 0
  var value
  for (var i = 0; i < 16; ++i) {
    if (i % 2 === 0) {
      value = 2 * cardNumber[i]
      if (value >= 10) {
        value = Math.floor(value / 10) + (value % 10)
      }
    } else {
      value = +cardNumber[i]
    }
    numSum += value
  }
  console.log('result', numSum % 10 === 0)
  return numSum % 10 === 0
}

export default function PaymentForm(props) {
  return (
    <>
      <Line>
        <BInput
          label="Número do cartão:"
          type="text"
          onChange={(e) => validateCreditCard(e)}
          maxlength={16}
          placeHolder="____.____.____.____"
        />
        <BInput label="Nome do Titular:" type="text" placeHolder="Como no cartão" />
      </Line>
      <DoubleFieldsLine>
        <BInput
          label="Validade (mês/ano):"
          type="text"
          maxlength={7}
          width="160px"
          placeHolder="__/____"
        />
        <BInput label="CVV:" type="text" maxlength={3} width="140px" />
      </DoubleFieldsLine>
    </>
  )
}
