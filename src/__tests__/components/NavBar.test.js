import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'

import NavBar from '../../components/NavBar'

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

describe('NavBar', () => {
  it('renders steps', () => {
    act(() => {
      render(<NavBar />, container)
    })
    expect(container.textContent).toBe('NavBar')
  })
})
