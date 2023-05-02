import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { waitFor } from '@testing-library/react'

import { render } from '@/test/utils'

import { CheckoutSummary } from '.'

const queryClient = new QueryClient()

afterEach(() => {
  queryClient.clear()
})

test('renders default state', async () => {
  const { getByText, queryByTestId } = render(
    <QueryClientProvider client={queryClient}>
      <CheckoutSummary handleNextStep={<p>children</p>} />
    </QueryClientProvider>
  )

  await waitFor(() => {
    expect(queryByTestId('checkout-price')).toBeInTheDocument()
    expect(queryByTestId('checkout-shipping-total')).toBeInTheDocument()
    expect(queryByTestId('checkout-discount-price')).toBeInTheDocument()
    expect(queryByTestId('checkout-subtotal')).toBeInTheDocument()
    expect(getByText(/children/i)).toBeInTheDocument()
  })
})

test('renders loading state', async () => {
  const { getByTestId } = render(
    <QueryClientProvider client={queryClient}>
      <CheckoutSummary handleNextStep={<p>children</p>} />
    </QueryClientProvider>
  )

  expect(getByTestId('loading-spinner')).toBeInTheDocument()
})
