import React from 'react'
import { Global } from '@emotion/core'
import {  withTheme, ThemeProvider } from 'emotion-theming'

import siteTheme from './theme/theme'
import cssGlobal from './theme/global'


// Component
import Router from "./routes";
import OrderProvider from './context/OrderContext';
import PaymentProvider from './context/PaymentProvider';

const GlobalStyle = withTheme(({ theme }) => (
  <Global styles={ cssGlobal(theme) } />
))

const App = () => (
  <>
    <ThemeProvider theme={siteTheme}>
      <OrderProvider >
        <PaymentProvider>
        <GlobalStyle />

        <Router/> 
        </PaymentProvider>
      </OrderProvider>
    </ThemeProvider>
  </>
)

export default App
