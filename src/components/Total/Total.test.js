import React from 'react'
import { render } from '@testing-library/react'

import data from '../../data/endpoint.json'

import Total from './Total'

describe('Total Component', () => {
  test('renders links', async () => {
    const { asFragment } = render(
      <Total
        subTotal={data.subTotal}
        shippingTotal={data.shippingTotal}
        discount={data.discount}
        total={data.total}
      />
    )

    expect(asFragment()).toMatchSnapshot()
  })
})
