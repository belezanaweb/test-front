import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import TabNav from './TabNav'

describe('Testa componente', () => {
  test('renders a value', () => {
    const value = 'SACOLA'
    render(<TabNav />)
    expect(screen.getByText(value)).toBeInTheDocument()
  })
})
