import { render, RenderOptions } from '@testing-library/react'
import { rest } from 'msw'
import { ReactElement, ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { theme } from '../styles/theme'
import { mockData } from '../test/mocks'

type RenderThemeProps = Omit<RenderOptions, 'queries'>

const renderTheme = (children: ReactElement, { ...renderOptions }: RenderThemeProps = {}) =>
  render(<ThemeProvider theme={theme}>{children}</ThemeProvider>, renderOptions)

export * from '@testing-library/react'
export { renderTheme as render }

export const handlers = [
  rest.get('*/data/*', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        ...mockData
      })
    )
  })
]

const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        refetchOnMount: false,
        refetchIntervalInBackground: false,
        refetchOnWindowFocus: false,
        refetchInterval: false,
        refetchOnReconnect: false
      }
    }
  })

export function renderWithClient(ui: ReactNode) {
  const testQueryClient = createTestQueryClient()
  const { rerender, ...result } = renderTheme(
    <QueryClientProvider client={testQueryClient}>{ui}</QueryClientProvider>
  )
  return {
    ...result,
    rerender: (rerenderUi: ReactNode) =>
      rerender(<QueryClientProvider client={testQueryClient}>{rerenderUi}</QueryClientProvider>)
  }
}

export function createWrapper() {
  const testQueryClient = createTestQueryClient()
  return ({ children }: any) => (
    <QueryClientProvider client={testQueryClient}>{children}</QueryClientProvider>
  )
}
