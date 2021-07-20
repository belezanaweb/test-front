import React from 'react'
import { render } from '@testing-library/react'
import { CartContainer } from './cartContainer'

describe('Cart Container', () => {
  it('Should render the cart container', async () => {
    const { getByText, getAllByTestId } = render(
      <CartContainer
        products={{
          items: [],
          subTotal: 10,
          shippingTotal: 5.3,
          discount: 30,
          total: 618.98
        }}
      />
    )
    expect(getByText('PRODUTOS')).toHaveClass('title')
  })
})
