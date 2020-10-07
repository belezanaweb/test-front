import React from 'react'
import { render } from '@testing-library/react'

import Payment from './Payment'

describe('Payment Page', () => {
  test('Renders with title', async () => {
    const { asFragment, getByText } = render(<Payment />)
    expect(getByText('Cartão de crédito')).toBeInTheDocument()

    expect(asFragment()).toMatchSnapshot()
  })
})
