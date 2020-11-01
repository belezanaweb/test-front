import React from 'react'
import { render } from '@testing-library/react'
import { ProductCard } from './ProductCard'

const productData = {
  productTitle: 'Teste',
  productPrice: 123.45,
  imageUrl: 'http://localhost.test'
}

test('renders ProductCard', () => {
  const { container } = render(<ProductCard {...productData} />)

  expect(container).toMatchSnapshot()
})
