import React from 'react'
import { render } from '../../utils/test-utils'
import { CartList } from '../../components'

const makeSut = (props) => {
  const mockCartItems = [
    {
      product: {
        sku: 1,
        name: 'Sample product 1',
        imageObjects: [{ small: 'teste' }],
        priceSpecification: {
          price: 100.0
        }
      }
    },
    {
      product: {
        sku: 2,
        name: 'Sample product 2',
        priceSpecification: {
          price: 100.0
        }
      }
    }
  ]

  return render(<CartList cartItems={mockCartItems} {...props} />)
}

describe('CartList', () => {
  test('should render without errors', () => {
    const { container } = render(<CartList />)
    expect(container).toBeInTheDocument()
  })

  test('should component render items', () => {
    const { container } = makeSut()

    const listElement = container.querySelector('ul')

    expect(listElement).toBeInTheDocument()
    expect(listElement?.children).toHaveLength(2)
  })

  test('should match with snapshot', () => {
    const { container } = makeSut()
    expect(container).toMatchSnapshot()
  })
})
