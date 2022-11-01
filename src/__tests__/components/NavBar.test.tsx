import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'

import { TestProvider } from '../../hooks'

import NavBar from '../../components/NavBar'

let container: HTMLDivElement

describe('NavBar', () => {

  beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
  })

  afterEach(() => {
    unmountComponentAtNode(container)
    container.remove()
  })

  it('renders steps', () => {
    act(() => {
      render(
        <TestProvider>
          <NavBar actualStep={'cart'} />
        </TestProvider>,
        container
      )
    })

    const steps = ['sacola', 'pagamento', 'confirmação']

    expect(steps.every((step) => container?.textContent?.toLowerCase().includes(step))).toBe(true)
  })
})
