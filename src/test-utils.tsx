import React, { ComponentType, ReactElement, ReactNode } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './global/styles/theme'

interface AllTheProvidersProps {
  children: ReactNode
}

const AllTheProviders = ({ children }: AllTheProvidersProps) => (
  <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
)

const customRender = (ui: ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: AllTheProviders as ComponentType, ...options })

export * from '@testing-library/react'

export { customRender as render }
