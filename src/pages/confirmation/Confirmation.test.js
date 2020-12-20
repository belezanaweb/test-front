import React from 'react'
import { Provider, useSelector } from 'react-redux'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import { Route, Router, Switch } from 'react-router-dom'

import { Store } from '../../states/stores'
import Payment from '../payment/Payment'
import Confirmation from './Confirmation'

const ReduxProvider = ({ children }) => <Provider store={Store}>{children}</Provider>

const mockSaleData = {
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

const mockCreditCardData = {
  number: '4111.1111.1111.1111',
  name: 'José da Silva',
  expiry: '12/2028',
  cvv: '123'
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

describe('Confirmation', () => {
  beforeEach(() => {
    useSelector.mockImplementation((callback) => {
      return callback({
        saleState: { sale: mockSaleData.data },
        cardState: { card: mockCreditCardData }
      })
    })
  })
  afterEach(() => {
    useSelector.mockClear()
  })

  test('renders without saved data', async () => {
    useSelector.mockImplementation((callback) => {
      return callback({
        saleState: { sale: null },
        cardState: { card: null }
      })
    })
    const payment = render(
      <ReduxProvider>
        <Confirmation />
      </ReduxProvider>
    )

    expect(mockHistoryGoBack).toHaveBeenCalled()
  })

  test('renders with saved data in sale and card stores ', async () => {
    const history = createMemoryHistory()

    render(
      <ReduxProvider>
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={Confirmation} />
          </Switch>
        </Router>
      </ReduxProvider>
    )

    await waitFor(() => screen.getByText('Compra efetuada com sucesso'))

    expect(screen.getByText('Compra efetuada com sucesso')).toBeInTheDocument()
    expect(screen.getByText('****.****.****.'+mockCreditCardData.number.split('.')[3])).toBeInTheDocument()
    expect(screen.getByText(mockCreditCardData.name)).toBeInTheDocument()
    expect(screen.getByText(mockSaleData.data.items[0].product.name)).toBeInTheDocument()
  })
})
