import React from 'react'
import { render, screen } from '@testing-library/react'
import TitleSection from './TitleSection'

describe('Title Section test', () => {
  test('Test if the Title Section Component is rendering', () => {
    render(<TitleSection title="Cart" />)
    expect(screen.getByText('Cart')).toBeInTheDocument()
  })
})
