import React, { useContext } from 'react'
import { PaymentContext } from '../../store/PaymentStore'
import styled from 'styled-components'
import {
  GenericWrapperSection,
  GenericWrapperTitle,
  GenericWrapperWrapper
} from '../GenericWrapper/GenericWrapper'

export const PaymentData = ({ title = 'Pagamento' }) => {
  const { state } = useContext(PaymentContext)

  return (
    <GenericWrapperSection>
      <GenericWrapperTitle>{title}</GenericWrapperTitle>
      <Wrapper>
        <div>{state.ccNumber}</div>
        <div>{state.ccName}</div>
        <div>{state.ccExpiry}</div>
      </Wrapper>
    </GenericWrapperSection>
  )
}

const Wrapper = styled(GenericWrapperWrapper)`
  color: #000;
`
