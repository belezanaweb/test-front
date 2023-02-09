import { render, screen } from '@testing-library/react'
import { describe } from 'vitest';
import { BagContent } from './BagContent'
import { Product } from './types';

function getRandomArbitrary(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export const makeProductMock = (length: number): Product[] => {
  return new Array(length).fill(null).map((_, index) => {
    return {
      quantity: 1,
      product: {
        sku: `${Date.now() + index}`.slice(-5),
        name: `Nome do produto número ${index}`,
        imageObjects: [
          {
            featured: true,
            thumbnail: `https://teste.com/img-thumbnail-${index}.png`,
            small: `https://teste.com/img-small-${index}.png`,
            medium: `https://teste.com/img-medium-${index}.png`,
            large: `https://teste.com/img-large-${index}.png`,
            extraLarge: `https://teste.com/img-extraLarge-${index}.png`,
            valid: true
          }
        ],
        priceSpecification: {
          sku: `${Date.now() + index}`.slice(-5),
          price: getRandomArbitrary(100, 130),
          originalPrice: getRandomArbitrary(100, 130),
          maxPrice: getRandomArbitrary(130, 180),
          percent: 7,
          discount: 18
        }
      }
    }
  })
}

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

