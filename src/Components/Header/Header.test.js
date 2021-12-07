import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import DataContext from '../../Store/DataContext'
import Header from './Header'

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

it('renders header', () => {
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
        <Header />
      </DataContext.Provider>,
      container
    )
  })
  expect(container.textContent).toContain('SACOLA')
  expect(container.textContent).toContain('PAGAMENTO')
  expect(container.textContent).toContain('CONFIRMAÇÃO')
})
