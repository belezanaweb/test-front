import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { CartDetailsProvider } from './hooks/useCartDetails'

import Routes from './routes'
import GlobalStyle from './styles/global'
import { ThemeProvider } from 'styled-components'
import light from './styles/themes/light'
import dark from './styles/themes/dark'
import big from './styles/themes/big'
import highContrast from './styles/themes/highContrast'
import { useCustomTheme } from './hooks/useTheme'

const App = () => {
  const { customTheme } = useCustomTheme()
  return (
    <>
      <Router>
        <CartDetailsProvider>
          <ThemeProvider
            theme={
              !customTheme
                ? light
                : customTheme === 'light'
                ? light
                : customTheme === 'dark'
                ? dark
                : customTheme === 'big'
                ? big
                : customTheme === 'highContrast'
                ? highContrast
                : light
            }
          >
            <GlobalStyle />
            <Routes />
          </ThemeProvider>
        </CartDetailsProvider>
      </Router>
    </>
  )
}

export default App
