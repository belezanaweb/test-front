import React from 'react'
import { render } from '@testing-library/react'

import data from '../../data/endpoint.json'

import Product from './Product'

describe('Product Component', () => {
  test('renders links', async () => {
    const { asFragment } = render(<Product product={data.items[0].product} />)

    expect(asFragment()).toMatchSnapshot()
  })
})
