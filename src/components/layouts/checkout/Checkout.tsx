import React, { PropsWithChildren } from 'react'
import PageTitle from '../../elements/pageTitle/PageTitle'

import Header from '../../modules/header/Header'

import { StyledCheckout, StyledMainContent } from './Checkout.styled'

type DefaultLayoutProps = PropsWithChildren<{
  title: string
}>

function CheckoutLayout({ title, children }: DefaultLayoutProps): JSX.Element {
  return (
    <StyledCheckout>
      <Header />
      <StyledMainContent>
        <PageTitle text={title} />
        {children}
      </StyledMainContent>
    </StyledCheckout>
  )
}

export default CheckoutLayout
