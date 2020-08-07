import React from 'react'
import { render } from '@testing-library/react'


import { ThemeProvider } from 'emotion-theming'
import siteTheme from './theme/theme'
import OrderProvider from './context/OrderContext'
import PaymentProvider from './context/PaymentProvider'

const AllTheProviders = ({ children }) => (
  <ThemeProvider theme={siteTheme}>
  <OrderProvider>
    <PaymentProvider>
      { children }
    </PaymentProvider>
  </OrderProvider>
</ThemeProvider>
)

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options })

// re-export everything
export * from '@testing-library/react'


export function renderWithRouter(
  ui,
  { route = '/', history = createHistory(createMemorySource(route)) } = {}
) {
  return {
    ...render(<LocationProvider history={history}>{ui}</LocationProvider>),
    // adding `history` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    history,
  }
}
// override render method
export { customRender as render }
