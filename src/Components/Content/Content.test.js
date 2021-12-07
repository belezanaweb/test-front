import React, { useDispatch } from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import DataContext from '../../Store/DataContext'
import Content from './Content'

let container = null
beforeEach(() => {
  // configurar o elemento do DOM como o alvo da renderização
  container = document.createElement('div')
  document.body.appendChild(container)
})

afterEach(() => {
  // limpar na saída
  unmountComponentAtNode(container)
  container.remove()
  container = null
})

it('Renders items data', async () => {
  const dispatch = jest.fn()
  const state = {
    displayThings: false,
    things: []
  }
  const providerState = {
    state,
    dispatch
  }
  const fakeItems = {
    id: '5b15c171e4b0023bb624f616',
    subTotal: 624.8,
    shippingTotal: 5.3,
    discount: 30,
    total: 618.9
  }
  jest.spyOn(global, 'fetch').mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeItems)
    })
  )
  await act(async () => {
    render(
      <DataContext.Provider value={providerState}>
        <Content />
      </DataContext.Provider>,
      container
    )
  })

  expect(dispatch).toHaveBeenCalledTimes(1)
  // expect(container.textContent).toContain(fakeItems.items)

  global.fetch.mockRestore()
})
