import React from 'react'
import { useHistory } from 'react-router-dom'

import * as S from './styles'
import Button from '../Button'

const PaymentNotFound = () => {
  const history = useHistory()

  const handleClick = () => history.push('/cart')

  return (
    <S.PaymentNotFound>
      <S.Text>Pagamento não encontrado</S.Text>
      <Button onClick={handleClick}>Voltar para o carrinho</Button>
    </S.PaymentNotFound>
  )
}

export default PaymentNotFound
