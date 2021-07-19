import React from 'react'
import { render } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('Should render the checkout component', async () => {
    const { getByTestId } = render(<App />)
    expect(getByTestId('checkout')).not.toBeNull()
  })
})
