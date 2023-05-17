import MyRoutes from './routers'
import { ThemeProvider } from 'styled-components'

import { CheckoutProvider } from './stores/Checkout/Checkout.store'

import GlobalStyle from './styles/global'
import Theme from "./styles/Theme"

export default function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <CheckoutProvider>
        <MyRoutes />
      </CheckoutProvider>
    </ThemeProvider>
  )
}
