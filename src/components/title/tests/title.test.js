import React from 'react'
import { render } from '@testing-library/react'
import Title from '../Title'

test('renders title correctly', () => {
  const myTitle = 'Produtos'
  const { getByText } = render(<Title>{myTitle}</Title>)
  const title = getByText(myTitle)

  expect(title).toBeInTheDocument()
})
