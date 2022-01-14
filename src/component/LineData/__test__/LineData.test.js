import React from 'react'
import { render, screen } from '@testing-library/react'
import LineData from '../LineData'

describe('Test of LineData', () => {
  test('Test with without discount', () => {
    render(<LineData name="FRETE" price={123.1} />)
    expect(screen.getByText('FRETE')).toBeInTheDocument()
    expect(screen.getByText('R$ 123,10')).toBeInTheDocument()
  })

  test('Test with with discount', () => {
    render(<LineData name="FRETE" price={123.1} type="discount" />)
    expect(screen.getByText('FRETE')).toBeInTheDocument()
    expect(screen.getByText('- R$ 123,10')).toBeInTheDocument()
  })
})
