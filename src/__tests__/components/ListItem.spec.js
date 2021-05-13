import { render, screen } from '@testing-library/react'
import React from 'react'

import { ListItem } from '../../components'
import { maskMoney } from '../../utils/validation'

describe('Testing ListItem.js', () => {
  it('should be able render listItem', () => {
    const item = {
      key: 1,
      imageURL: '',
      name: 'Test',
      price: 20
    }

    render(<ListItem imageURL={item.imageURL} name={item.name} price={item.price} />)

    expect(screen.getByRole('img')).toBeInTheDocument()
    expect(screen.getByText(item.name)).toBeTruthy()
    expect(
      screen.getByText((content, node) => node.textContent === maskMoney(item.price))
    ).toBeTruthy()
  })
})
