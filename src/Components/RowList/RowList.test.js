import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import RowList from './RowList'

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

it('renders RowList', () => {
  act(() => {
    render(<RowList colname="produto" colvalue={100} color="#212122" space="9px" />, container)
  })
  expect(container.textContent).toContain('PRODUTO')
})
