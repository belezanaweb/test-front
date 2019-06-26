// source: https://testing-library.com/docs/react-testing-library/setup#custom-render
import React, { Suspense } from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'emotion-theming'
import theme from '../theme'

// eslint-disable-next-line react/prop-types
function WithProviders ({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={<>Loading...</>}>{children}</Suspense>
    </ThemeProvider>
  )
}

const customRender = (ui, options) => render(ui, { wrapper: WithProviders, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
