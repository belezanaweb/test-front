import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'

import Checkout from '.'
import useFetch from '../../hooks/useFetch'

describe('Checkout component', () => {
  it('Should render loading', async () => {
    render(<Checkout />)

    expect(await screen.findByTestId('loading')).toBeInTheDocument()
  })
})
