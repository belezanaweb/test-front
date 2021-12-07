import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import Title from './Title'

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

it('renders Title', () => {
  act(() => {
    render(<Title title="Produtos" />, container)
  })
  expect(container.textContent).toContain('PRODUTOS')
})
