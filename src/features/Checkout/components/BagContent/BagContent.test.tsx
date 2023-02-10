import { render, screen } from '@testing-library/react'
import { describe } from 'vitest';
import { makeProductMock } from '../../../../test/mocks/makeProductMock'
import { BagContent } from './BagContent'

const productsMock = makeProductMock(3)

describe('<BagContent>', () => {
  test('should display product names', () => {
    render(<BagContent products={productsMock} />)
    expect(screen.getByText(productsMock[0].product.name)).toBeInTheDocument()
    expect(screen.getByText(productsMock[1].product.name)).toBeInTheDocument()
    expect(screen.getByText(productsMock[2].product.name)).toBeInTheDocument()
  })
  
  test('should display product images', () => {
    render(<BagContent products={productsMock} />)
    expect(screen.getByRole('img', { name: productsMock[0].product.name })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: productsMock[1].product.name })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: productsMock[2].product.name })).toBeInTheDocument()
  })

  test('should display correctly formatted product max price', () => {
    render(<BagContent products={productsMock} />)
    const { product } = productsMock[0]
    const { priceSpecification: { maxPrice }} = product
    expect(
      screen.getByTestId(`product-${product.sku}-max-price`).textContent
    ).toBe(maxPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }))
  })

  test('should display correctly formatted product price', () => {
    render(<BagContent products={productsMock} />)
    const { product } = productsMock[0]
    const { priceSpecification: { price }} = product
    expect(
      screen.getByTestId(`product-${product.sku}-price`).textContent
    ).toBe(price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }))
  })
})

