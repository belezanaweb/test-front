import React from 'react'
import { render, screen } from '@testing-library/react'
import Card from '../Card'

describe('Test of Card', () => {
  test('Test if is rendering', () => {
    const { container } = render(<Card image={'test.img'} name={'Perfume'} price={1231.12} />)
    expect(screen.getByText('Perfume')).toBeInTheDocument()
    expect(container.querySelector('img').src).toContain('test.img')
    expect(screen.getByText('R$ 1.231,12')).toBeInTheDocument()
  })
})
