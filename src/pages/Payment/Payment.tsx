import React from 'react'

import { IPaymentPage } from './interface'

import Button from '../../components/Button'
import CartTable from '../../components/CartTable'

import { FormBuilder } from '../../components/Form'
import { fields } from '../../components/Form/data'
import Title from '../../components/Title'

export const Payment = ({ productData, handleSubmit }: IPaymentPage) => {
  return (
    <>
      <Title>Cartão de crédito</Title>

      <FormBuilder onSubmit={handleSubmit} fieldsList={fields}>
        <CartTable
          subTotal={productData.subTotal}
          shippingTotal={productData.shippingTotal}
          discount={productData.discount}
          total={productData.total}
        />
        <Button type="submit">Finalizar o pedido</Button>
      </FormBuilder>
    </>
  )
}
