import { ReactElement, ReactNode } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

export function wrapper({ children }: { children: ReactNode }) {
  const queryClient = new QueryClient()
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}

export function setup(ui: ReactElement, options?: RenderOptions) {
  return {
    user: userEvent.setup(),
    ...render(ui, options)
  }
}

// re-export everything
export * from '@testing-library/react'
