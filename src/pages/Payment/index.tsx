import React from 'react'
import InfoWrapper from '../../components/InfoWrapper'
import Menu from '../../components/Menu'
import * as S from './styles'
import { useCartDetails } from '../../hooks/useCartDetails'
import Subtotal from '../../components/Subtotal'
import Button from '../../components/Button'
import Loader from '../../components/Loader'
import PaymentForm from '../../components/PaymentForm'

export function Payment() {
  const { discount, shippingTotal, subTotal, total, mounted } = useCartDetails()

  interface Values {
    creditCard: string
  }

  return (
    <>
      {!mounted ? (
        <Loader />
      ) : (
        <>
          <S.Wrapper>
            <S.MenuWrapper>
              <Menu activeLink="/payment" />
            </S.MenuWrapper>
            <PaymentForm
              shippingTotal={shippingTotal}
              subTotal={subTotal}
              total={total}
              discount={discount}
            />
          </S.Wrapper>
        </>
      )}
    </>
  )
}
