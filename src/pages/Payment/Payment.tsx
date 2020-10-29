import React from 'react'

import { IPaymentPage } from './interface'

import Button from '../../components/Button'
import CartTable from '../../components/CartTable'

import { FormBuilder } from '../../components/Form'
import { fields } from '../../components/Form/data'
import Title from '../../components/Title'
import * as S from './Payment.styled'

export const Payment = ({ productData, handleSubmit }: IPaymentPage) => {
  return (
    <>
      <Title>Cartão de crédito</Title>
      <FormBuilder onSubmit={handleSubmit} fieldsList={fields}>
        <S.ProductsTotalWrapper>
          <CartTable
            subTotal={productData.subTotal}
            shippingTotal={productData.shippingTotal}
            discount={productData.discount}
            total={productData.total}
          />
          <Button type="submit">Finalizar o pedido</Button>
        </S.ProductsTotalWrapper>
      </FormBuilder>
    </>
  )
}
