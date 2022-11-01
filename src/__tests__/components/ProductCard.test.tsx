import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'

import { TestProvider } from '../../hooks'

import ProductCard from '../../components/ProductCard'

let container: HTMLDivElement

describe('ProductCard', () => {

  beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
  })

  afterEach(() => {
    unmountComponentAtNode(container)
    container.remove()
  })

  it('should render price', () => {
    act(() => {
      render(
        <TestProvider>
          <ProductCard image={'test'} title={'test'} price={2.00} />
        </TestProvider>,
        container
      )
    })

    expect(container?.querySelector('#price')?.innerHTML).toBe('R$&nbsp;2,00')
  })

  it('should render small title', () => {
    act(() => {
      render(
        <TestProvider>
          <ProductCard
            title={'Senscience Inner Restore Intensif - Máscara Capilar 50ml'}
            image={'test'}
          />
          ,
        </TestProvider>,
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
        <TestProvider>
          <ProductCard
            title={
              "L'Oréal Professionnel Expert Absolut Repair Cortex Lipidium - Máscara de Reconstrução 500g"
            }
            image={'test'}
          />
        </TestProvider>,
        container
      )
    })

    expect(container?.querySelector('#title')?.innerHTML).toBe(
      "L'Oréal Professionnel Expert Absolut Repair Cortex Lipidium"
    )
  })
})
