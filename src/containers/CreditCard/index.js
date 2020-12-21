import React from 'react'

import Input from '../../components/Input'

import * as S from './style'

const required = 'Campo obrigatório'
const CreditCard = ({ register, errors }) => (
  <S.Wrapper>
    <Input
      type="tel"
      label="Número do cartão"
      name="cardNumber"
      mask="0000.0000.0000.0000"
      placeholder="____.____.____.____"
      error={errors?.cardNumber?.message}
      ref={register({
        required,
        pattern: {
          value: /^[0-9]{4}\.[0-9]{4}\.[0-9]{4}\.[0-9]{4}$/i,
          message: 'Número do cartão inválido'
        }
      })}
    />
    <Input
      label="Nome do Titular"
      name="name"
      error={errors?.name?.message}
      placeholder="Como no cartão"
      ref={register({ required })}
    />
    <S.Divider>
      <Input
        type="tel"
        label="Validade (mês/ano)"
        mask="00/0000"
        name="validDate"
        placeholder="__/____"
        error={errors?.validDate?.message}
        ref={register({
          required,
          pattern: {
            value: /^[0-9]{2,}\/[0-9]{4,}/i,
            message: 'Validade inválida'
          }
        })}
      />
      <Input
        type="tel"
        label="CVV"
        name="code"
        mask="000"
        error={errors?.code?.message}
        ref={register({
          required,
          pattern: {
            value: /^[0-9]{3}$/i,
            message: 'CVV inválido'
          }
        })}
      />
    </S.Divider>
  </S.Wrapper>
)

export default CreditCard
