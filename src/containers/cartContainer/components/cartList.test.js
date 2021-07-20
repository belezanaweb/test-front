import React from 'react'
import { render } from '@testing-library/react'
import { CartList } from './cartList'

describe('Cart List', () => {
  it('Should render the cart list', async () => {
    const { getByTestId, getAllByTestId } = render(
      <CartList
        items={[
          {
            product: {
              sku: '10',
              name: 'Teste10',
              imageObjects: [
                {
                  small: '/'
                }
              ],
              priceSpecification: {
                price: 10.0
              }
            }
          },
          {
            product: {
              sku: '20',
              name: 'Teste20',
              imageObjects: [
                {
                  small: '/'
                }
              ],
              priceSpecification: {
                price: 20.0
              }
            }
          }
        ]}
      />
    )
    expect(getByTestId('cart-list')).toHaveClass('cart-list')
    expect(getAllByTestId('cart-item')).toHaveLength(2)
  })
})
