import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import DataContext from '../../Store/DataContext'
import ProductsList from './ProductsList'

let container = null
beforeEach(() => {
  // configurar o elemento do DOM como o alvo da renderização
  container = document.createElement('div')
  document.body.appendChild(container)
})

afterEach(() => {
  // Limpar ao sair
  unmountComponentAtNode(container)
  container.remove()
  container = null
})

it('renders ProductsList', () => {
  const dispatch = jest.fn()
  const state = {
    displayThings: false,
    things: []
  }
  const providerState = {
    state: {
      products: {
        items: [
          {
            product: {
              name: 'Product Name',
              imageObjects: [
                {
                  large: 'Imagem'
                }
              ],
              priceSpecification: {
                originalPrice: 10
              },
              sku: 'ABC'
            }
          }
        ]
      }
    },
    dispatch
  }
  act(() => {
    render(
      <DataContext.Provider value={providerState}>
        <ProductsList />
      </DataContext.Provider>,
      container
    )
  })
  expect(screen.getByText('Product Name')).toBeInTheDocument()
})
