import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'

import { CreditCardProvider } from '../../hooks/creditCard'
import { TestProvider } from '../../hooks'

import Input from '../../components/Input'

let container: HTMLDivElement

describe('Input', () => {

  beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
  })

  afterEach(() => {
    unmountComponentAtNode(container)
    container.remove()
  })

  it('should render Input with label', () => {
    act(() => {
      render(
        <TestProvider>
          <CreditCardProvider>
            <Input
              name={'name'}
              onlyNumbers
              placeholder={'____.____.____.____'}
              maskPattern={'####.####.####.####'}
              maskDivider={'.'}
              label={'test'}
              hasError={false}
            />
          </CreditCardProvider>
        </TestProvider>,
        container
      )
    })

    expect(container?.querySelector('#label')?.textContent?.toLowerCase().includes('test'))
  })
})
