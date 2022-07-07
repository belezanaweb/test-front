import React, { ComponentType, ReactElement, ReactNode } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './global/styles/theme'
import { HeaderProvider } from './contexts/HeaderContext'
import { BagProvider } from './contexts/BagContext'
import { PaymentFormProvider } from './contexts/PaymentFormContext'

interface AllTheProvidersProps {
  children: ReactNode
}

const AllTheProviders = ({ children }: AllTheProvidersProps) => (
  <HeaderProvider>
    <BagProvider>
      <PaymentFormProvider>
        <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
      </PaymentFormProvider>
    </BagProvider>
  </HeaderProvider>
)

const customRender = (ui: ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: AllTheProviders as ComponentType, ...options })

export * from '@testing-library/react'

export { customRender as render }
