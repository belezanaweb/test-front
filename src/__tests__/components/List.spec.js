import { render, screen } from '@testing-library/react'
import React from 'react'

import { List } from '../../components'
import { maskMoney } from '../../utils/validations'

describe('Testing List.js', () => {
  it('should be able render list', () => {
    const items = [
      {
        key: 1,
        imageURL: '',
        name: 'Test',
        price: 20
      }
    ]

    render(<List items={items} />)

    expect(screen.getByRole('img')).toBeInTheDocument()
    expect(screen.getByText(items[0].name)).toBeTruthy()
    expect(
      screen.getByText((content, node) => node.textContent === maskMoney(items[0].price))
    ).toBeTruthy()
  })
})
