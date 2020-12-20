import React from 'react'
import { Provider } from 'react-redux'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import { Route, Router } from 'react-router-dom'

import SaleService from '../../services/SaleService'
import { Store } from '../../states/stores'
import Cart from './Cart'
import Payment from '../payment/Payment'

const ReduxProvider = ({ children }) => <Provider store={Store}>{children}</Provider>

const spyLoadData = jest.spyOn(SaleService, 'loadData')

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
describe('card', () => {
  beforeEach(() => {
    spyLoadData.mockImplementation(() => new Promise((resolve, reject) => resolve(mockData)))
  })
  afterEach(() => {
    jest.clearAllMocks()
  })
  test('renders with error on load data', async () => {
    spyLoadData.mockImplementation(
      () => new Promise((resolve, reject) => reject(new Error()))
    )

    const cart = render(
      <ReduxProvider>
        <Cart />
      </ReduxProvider>
    )

    await waitFor(() => screen.getByText('Não foi possivel carregar os dados.'))

    expect(spyLoadData).toHaveBeenCalled()
    expect(screen.getByText('Não foi possivel carregar os dados.')).toBeInTheDocument()
  })

  test('renders with valid data', async () => {
    render(
      <ReduxProvider>
        <Cart />
      </ReduxProvider>
    )

    await waitFor(() => screen.getByText('Seguir para o pagamento'))

    expect(spyLoadData).toHaveBeenCalled()
    expect(screen.getAllByText(/Produtos/i).length).toBe(2)
    expect(screen.getByText(/Seguir para o pagamento/i)).toBeInTheDocument()
  })

  test('renders and navigate to payment', async () => {
    const history = createMemoryHistory()

    const cart = render(
      <ReduxProvider>
        <Router history={history}>
          <Route exact path="/" component={Cart} />
          <Route path="/payment" component={Payment} />
        </Router>
      </ReduxProvider>
    )

    await waitFor(() => screen.getByText('Seguir para o pagamento'))

    fireEvent.click(screen.getByText('Seguir para o pagamento'))

    await waitFor(() => screen.getByText('Finalizar o pedido'))

    expect(screen.getByText('Finalizar o pedido')).toBeInTheDocument()
    expect(screen.getByLabelText('Número do cartão:')).toBeInTheDocument()
    expect(screen.getByLabelText('Nome do Titular:')).toBeInTheDocument()
    expect(screen.getByLabelText('Validade (mês/ano):')).toBeInTheDocument()
    expect(screen.getByLabelText('CVV:')).toBeInTheDocument()
    expect(screen.getByText('Produtos')).toBeInTheDocument()
    expect(screen.getByText('Frete')).toBeInTheDocument()
    expect(screen.getByText('Desconto')).toBeInTheDocument()
    expect(screen.getByText('Total')).toBeInTheDocument()
  })
})
