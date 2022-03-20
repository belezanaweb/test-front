import React from 'react'
import * as S from './Payment.styled'
import Header from '../../components/Header/Header'
import Title from '../../components/Title/Title'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'

const Payment = () => {
  return (
    <S.PaymentBackgroud>
      <Header page={1} />
      <S.PaymentDiv>
        <Title text="CARTÃO DE CREDITO" />
        <S.PaymentWrapper>
          <Input size={320} value="Número do cartão:" placeholder="____.____.____.____" />
          <Input size={320} value="Nome do Titular:" placeholder="Como no cartão" />
          <div className="input-wrapper">
            <Input size={160} value="Validade (mês/ano):" placeholder="__/____" />
            <Input size={140} value="CVV:" placeholder="___" />
          </div>
        </S.PaymentWrapper>
        <Button text="SEGUIR PARA O PAGAMENTO" />
      </S.PaymentDiv>
    </S.PaymentBackgroud>
  )
}

export default Payment
