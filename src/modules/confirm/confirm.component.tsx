import { PaymentInfo, SuccessDialog, Card, Products, Summary, Title } from 'components'
import React, { FC } from 'react'
import { ConfirmContainerStyled } from './confirm.style'

export const Confirm: FC<{ children?: never }> = () => {
  return (
    <ConfirmContainerStyled>
      <SuccessDialog />
      <PaymentInfo />
      <div className="products">
        <Products thumbs />
      </div>
      <Summary />
    </ConfirmContainerStyled>
  )
}
