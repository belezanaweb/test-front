import React from 'react'
import { screen, render } from '@testing-library/react'

import ProductList from './ProductList'

const productListDefaultProps = {
  productList: [
    {
      product: {
        sku: '123',
        name: 'produto 1',
        priceSpecification: {
          price: 123.4
        },
        imageObjects: [
          {
            small: 'image/path',
            medium: 'image/path'
          }
        ]
      }
    }
  ],
  small: false
}

describe('ProductList', () => {
  it('should render ProductList', () => {
    const { container } = render(<ProductList {...productListDefaultProps} />)

    container.firstChild

    expect(container.firstChild).toBeInTheDocument()
  })

  it('should not render price when variation is small', () => {
    render(<ProductList {...productListDefaultProps} small />)

    const price = screen.queryAllByTestId('product-price')

    expect(price.length).toBe(0)
  })

  it('should render price when variation is not small', () => {
    render(<ProductList {...productListDefaultProps} />)

    const price = screen.queryAllByTestId('product-price')

    expect(price.length).toBe(productListDefaultProps.productList.length)
  })
})
