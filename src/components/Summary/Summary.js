import React from 'react'
import { convertCurrency } from '../../utils/currency'
import { SummaryContainer, Title, TittleDiscount, TitleTotal } from './styles'

const Summary = (props) => {
  return (
    <SummaryContainer>
      <Title>
        <span>PRODUTOS </span>
        <span>{convertCurrency(props.summary.subTotal)}</span>
      </Title>
      <Title>
        <span>FRETE </span>
        <span>{convertCurrency(props.summary.shipping)}</span>
      </Title>
      <TittleDiscount>
        <span>DESCONTO </span>
        <span>- {convertCurrency(props.summary.discount)}</span>
      </TittleDiscount>
      <TitleTotal>
        <span>TOTAL </span>
        <span>{convertCurrency(props.summary.total)}</span>
      </TitleTotal>
    </SummaryContainer>
  )
}

export default Summary
