import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import Products from './Products'

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

it('renders Products', () => {
  const items = {
    product: {
      name: 'Product Name',
      imageObjects: [
        {
          large: 'Imagem'
        }
      ],
      priceSpecification: {
        originalPrice: 10
      }
    }
  }
  act(() => {
    render(<Products data={items} />, container)
  })
  expect(container.textContent).toContain('Product Name')
})
