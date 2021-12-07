import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import DataContext from '../../Store/DataContext'
import TotalList from './TotalList'

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

it('renders TotalList', () => {
  const dispatch = jest.fn()
  const state = {
    displayThings: false,
    things: []
  }
  const providerState = {
    state,
    dispatch
  }
  act(() => {
    render(
      <DataContext.Provider value={providerState}>
        <TotalList />
      </DataContext.Provider>,
      container
    )
  })
  expect(container.textContent).toContain('PRODUTO')
  expect(container.textContent).toContain('FRETE')
  expect(container.textContent).toContain('DESCONTO')
  expect(container.textContent).toContain('TOTAL')
})
