import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'

import ProductCard from '../../components/ProductCard'

let container: HTMLDivElement

beforeEach(() => {
  container = document.createElement('div')
  document.body.appendChild(container)
})

afterEach(() => {
  unmountComponentAtNode(container as HTMLDivElement)
  container.remove()
})

describe('ProductCard', () => {
  it('should render price', () => {
    act(() => {
      render(<ProductCard image={'test'} title={'test'} price={'2.00'} />, container)
    })

    expect(container?.querySelector('#price')?.innerHTML).toBe('R$&nbsp;2,00')
  })

  it('should render small title', () => {
    act(() => {
      render(
        <ProductCard title={'Senscience Inner Restore Intensif - Máscara Capilar 50ml'} image={'test'} />,
        container
      )
    })

    expect(container?.querySelector('#title')?.innerHTML).toBe(
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
          image={'test'}
        />,
        container
      )
    })

    expect(container?.querySelector('#title')?.innerHTML).toBe(
      "L'Oréal Professionnel Expert Absolut Repair Cortex Lipidium"
    )
  })
})
