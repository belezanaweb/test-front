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
      render(<ProductCard price={'02.00'} />, container)
    })

    expect(container.querySelector('#price').innerHTML).toBe('02.00')
  })
})
