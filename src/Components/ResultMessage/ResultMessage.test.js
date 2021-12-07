import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import ResultMessage from './ResultMessage'

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

it('renders ResultMessage', () => {
  act(() => {
    render(<ResultMessage status={true} message={'Mensagem'} />, container)
  })
  expect(container.querySelector("[data-testid='check']")).toBeTruthy()

  act(() => {
    render(<ResultMessage status={false} message={'Mensagem'} />, container)
  })
  expect(container.querySelector("[data-testid='nocheck']")).toBeTruthy()
})
