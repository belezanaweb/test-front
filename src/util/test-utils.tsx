import React from 'react'
import { ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import {
  CartDetailsContext,
  CartDetailsProps,
  cartDetailsPropsInitialValues
} from '../hooks/useCartDetails'

import { ThemeProvider } from 'styled-components'
import theme from '../styles/themes/light'

type CustomRenderProps = {
  cartProviderProps?: CartDetailsProps
} & Omit<RenderOptions, 'queries'>

const customRender = (
  ui: ReactElement,
  {
    cartProviderProps = cartDetailsPropsInitialValues,
    ...renderOptions
  }: CustomRenderProps = {}
) =>
  render(
    <ThemeProvider theme={theme}>
      <CartDetailsContext.Provider value={cartProviderProps}>
        {ui}
      </CartDetailsContext.Provider>
    </ThemeProvider>,
    renderOptions
  )

export * from '@testing-library/react'
export { customRender as render }
