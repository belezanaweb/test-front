import React from 'react'
import { render, screen } from '@testing-library/react'

import Checkout from '.'

describe('Checkout component', () => {
  it('Should render loading', async () => {
    render(<Checkout />)

    expect(await screen.findByTestId('loading')).toBeInTheDocument()
  })
})
