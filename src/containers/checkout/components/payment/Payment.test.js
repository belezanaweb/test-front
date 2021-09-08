import React from 'react'
import { render, screen } from '@testing-library/react'

import Payment from '.'

describe('Payment component', () => {
  it('Should render correctly', async () => {
    render(<Payment />)

    const inputs = await screen.findAllByRole('input')

    expect(inputs).toHaveLength(4)
    expect(screen.getByRole('heading', { level: 3 })).toBeInTheDocument()
  })
})
