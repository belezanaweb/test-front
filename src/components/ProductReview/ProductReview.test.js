import React from 'react'
import { render } from '@testing-library/react'

import data from '../../data/endpoint.json'

import ProductReview from './ProductReview'

describe('ProductReview Component', () => {
  test('renders links', async () => {
    const { asFragment } = render(<ProductReview product={data.items[0].product} />)

    expect(asFragment()).toMatchSnapshot()
  })
})
