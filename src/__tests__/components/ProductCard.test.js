import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'

import ProductCard from '../../components/ProductCard'

let container = null

beforeEach(() => {
  container = document.createElement('div')
  document.body.appendChild(container)
})

afterEach(() => {
  unmountComponentAtNode(container)
  container.remove()
  container = null
})

describe('ProductCard', () => {
  it('should render price', () => {
    act(() => {
      render(<ProductCard price={'2.00'} />, container)
    })

    expect(container.querySelector('#price').innerHTML).toBe('R$&nbsp;2,00')
  })

  it('should render small title', () => {
    act(() => {
      render(
        <ProductCard title={'Senscience Inner Restore Intensif - Máscara Capilar 50ml'} />,
        container
      )
    })

    expect(container.querySelector('#title').innerHTML).toBe(
      'Senscience Inner Restore Intensif - Máscara Capilar 50ml'
    )
  })

  it('should shorten large title', () => {
    act(() => {
      render(
        <ProductCard
          title={
            "L'Oréal Professionnel Expert Absolut Repair Cortex Lipidium - Máscara de Reconstrução 500g"
          }
        />,
        container
      )
    })

    expect(container.querySelector('#title').innerHTML).toBe(
      "L'Oréal Professionnel Expert Absolut Repair Cortex Lipidium"
    )
  })
})
