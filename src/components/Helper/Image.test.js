import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { product } from '../../util/mocks'

import Image from './Image'

describe('Image component', () => {
  it('Should render correctly', async () => {
    render(<Image src={product.imageObjects[0].small} alt={product.name} />)

    expect(screen.getByTestId('skeleton')).toBeInTheDocument()
    expect(
      screen.getByRole('img', {
        name: /máscara de reconstrução 500g/i
      })
    ).toBeInTheDocument()
  })

  it('Should not show skeleton', async () => {
    const handleLoad = jest.fn()
    jest.spyOn(React, 'useState').mockImplementationOnce(() => React.useState(false))

    render(<Image src={product.imageObjects[0].small} alt={product.name} onLoad={handleLoad} />)

    fireEvent.load(screen.getByRole('img'))

    expect(handleLoad).toHaveBeenCalledTimes(1)
    expect(screen.queryByTestId('skeleton')).toBeNull()
  })
})
