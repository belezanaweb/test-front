import { render, screen, waitFor } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { describe } from 'vitest'
import userEvent from '@testing-library/user-event'
import nock from 'nock'
import { Checkout } from './Checkout'
import { makeProductMock } from './components/BagContent/BagContent.test'

const queryClient =  new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      networkMode: 'offlineFirst',
      refetchInterval: false,
      refetchIntervalInBackground: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
})

const items = makeProductMock(3)

describe(`
  <Checkout>
  given that the query returns data successfully
  `, () => {
  beforeEach(() => {
    nock('https://run.mocky.io/v3')
      .get('/d6e9a93f-9741-4494-b81e-637a8e9b8ddd')
      .reply(200, {
        shippingTotal: 9.5,
        total: 525.5,
        subTotal: 560,
        discount: 30.5,
        items,
      });
  })

  test(`
    when the user accesses the page
    then should show the bag contents 
    `, async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Checkout />
      </QueryClientProvider>
    )

    expect(await screen.findByText(items[0].product.name)).toBeInTheDocument()
    expect(screen.getByText(items[1].product.name)).toBeInTheDocument()
    expect(screen.getByText(items[2].product.name)).toBeInTheDocument()

    expect(screen.getByText(/produtos: \(3 itens\)/i)).toBeInTheDocument()
    expect(screen.getByText(/r\$ 9,50/i)).toBeInTheDocument()
    expect(screen.getByText(/r\$ 560,00/i)).toBeInTheDocument()
    expect(screen.getByText(/r\$ 30,50/i)).toBeInTheDocument()
    expect(screen.getByText(/r\$ 525,50/i)).toBeInTheDocument()
  })

  test(`
    when the user does not enter all required fields
    then disable submit button 
    `, async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Checkout />
      </QueryClientProvider>
    )

    await userEvent.click(screen.getByRole('button', {  name: /seguir para o pagamento/i}))

    expect(screen.getByRole('button', {  name: /finalizar pedido/i})).toBeDisabled()

    await userEvent.type(screen.getByRole('textbox', { name: /número/i}), '1234567809876543')
    await userEvent.type(screen.getByRole('textbox', { name: /nome do titular do cartão/i}), 'James da Silva')
    await userEvent.type(screen.getByRole('textbox', { name: /data de validade/i}), '1234')
    await userEvent.type(screen.getByRole('textbox', { name: /código cvv:/i}), '123')

    expect(screen.getByRole('button', {  name: /finalizar pedido/i})).toBeEnabled()

    await userEvent.clear(screen.getByRole('textbox', { name: /data de validade/i}))

    expect(screen.getByRole('button', {  name: /finalizar pedido/i})).toBeDisabled()
  })

  test(`
    when the user enters valid credit card details
    then show success message 
    `, async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Checkout />
      </QueryClientProvider>
    )

    await userEvent.click(screen.getByRole('button', {  name: /seguir para o pagamento/i}))

    await userEvent.type(screen.getByRole('textbox', { name: /número/i}), '1234567809876543')
    await userEvent.type(screen.getByRole('textbox', { name: /nome do titular do cartão/i}), 'James da Silva')
    await userEvent.type(screen.getByRole('textbox', { name: /data de validade/i}), '1234')
    await userEvent.type(screen.getByRole('textbox', { name: /código cvv:/i}), '123')

    await userEvent.click(screen.getByRole('button', { name: /finalizar pedido/i}))
    
    waitFor(() => {
      expect(screen.getByRole('heading', { name: /compra efetuada com sucesso/i})).toBeInTheDocument()
      expect(screen.getByRole('button', { name: /seguir para o pagamento/i})).toBeEnabled()
    })
  })
})

