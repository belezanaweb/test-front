import React from 'react'
import { render, screen } from '@testing-library/react'
import { products } from '../../../../util/mocks'
import Products from '.'

describe('Products component', () => {
  it('Should render correctly products', async () => {
    render(<Products products={products} />)

    const items = await screen.findAllByRole('product')

    expect(items).toHaveLength(3)
  })
})
