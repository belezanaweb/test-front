import React from 'react'
import { render, screen } from '@testing-library/react'
import { Value, normalizeMoneyValue } from './Value'

describe('Value', () => {
  test('renders Value with currency', () => {
    render(<Value>2.51</Value>)

    screen.getByText(/R\$\s?2.51/)
  })

  test('renders Value without currency', () => {
    render(<Value currency={null}>2.51</Value>)

    screen.getByText('2.51')
  })
})

describe('normalizeMoneyValue', () => {
  test('returns value as currency', () => {
    const value = normalizeMoneyValue(2.51)

    expect(value).toMatch(/R\$\s?2.51/)
  })
})
