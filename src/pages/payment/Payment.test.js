import React from 'react'
import { Provider, useSelector } from 'react-redux'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import { Route, Router, Switch } from 'react-router-dom'

import { Store } from '../../states/stores'
import Payment from '../payment/Payment'
import Confirmation from '../confirmation/Confirmation'

const ReduxProvider = ({ children }) => <Provider store={Store}>{children}</Provider>

const mockData = {
  data: {
    id: '5b15c171e4b0023bb624f616',
    items: [
      {
        quantity: 1,
        product: {
          sku: '24410',
          name:
            "L'Oréal Professionnel Expert Absolut Repair Cortex Lipidium - Máscara de Reconstrução 500g",
          imageObjects: [
            {
              featured: true,
              thumbnail: ''
            }
          ],
          priceSpecification: {
            sku: '24410',
            price: 225.9,
            originalPrice: 225.9,
            maxPrice: 243.9,
            percent: 7,
            discount: 18
          }
        }
      }
    ],
    subTotal: 624.8,
    shippingTotal: 5.3,
    discount: 30,
    total: 618.9
  }
}

const mockHistoryGoBack = jest.fn()
const mockHistoryPush = jest.fn()
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    goBack: mockHistoryGoBack,
    push: mockHistoryPush
  })
}))

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn()
}))

describe('Payment', () => {
  beforeEach(() => {
    useSelector.mockImplementation((callback) => {
      return callback({ saleState: { sale: mockData.data } })
    })
  })
  afterEach(() => {
    useSelector.mockClear()
  })

  test('renders without saved data in sale store', async () => {
    useSelector.mockImplementation((callback) => {
      return callback({ saleState: { sale: null } })
    })
    const payment = render(
      <ReduxProvider>
        <Payment />
      </ReduxProvider>
    )

    expect(mockHistoryGoBack).toHaveBeenCalled()
    expect(screen.getByText('Cartão de Crédito')).toBeInTheDocument()
  })

  test('renders with saved data in sale store', async () => {
    const history = createMemoryHistory()

    render(
      <ReduxProvider>
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={Payment} />
          </Switch>
        </Router>
      </ReduxProvider>
    )

    await waitFor(() => screen.getByText('Finalizar o pedido'))
    expect(screen.getByText('Finalizar o pedido')).toBeInTheDocument()
    expect(screen.getByLabelText('Número do cartão:')).toBeInTheDocument()
    expect(screen.getByLabelText('Nome do Titular:')).toBeInTheDocument()
    expect(screen.getByLabelText('Validade (mês/ano):')).toBeInTheDocument()
    expect(screen.getByLabelText('CVV:')).toBeInTheDocument()
  })

  test('renders and submit credit card data ', async () => {
    const history = createMemoryHistory()

    render(
      <ReduxProvider>
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={Payment} />
            <Route path="/confirmation" component={Confirmation} />
          </Switch>
        </Router>
      </ReduxProvider>
    )

    await waitFor(() => screen.getByText('Finalizar o pedido'))

    fireEvent.change(screen.getByLabelText('Número do cartão:'), { target: { value: '4111111111111111'}})
    fireEvent.change(screen.getByLabelText('Nome do Titular:'), {target: {value: 'José da Silva'}})
    fireEvent.change(screen.getByLabelText('Validade (mês/ano):'), {target: {value: '12/2028'}})
    fireEvent.change(screen.getByLabelText('CVV:'), {target: {value: '123'}})

    fireEvent.click(screen.getByText('Finalizar o pedido'))

    expect(mockHistoryPush).toHaveBeenCalled()
  })
})
