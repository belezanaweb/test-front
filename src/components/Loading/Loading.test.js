import React from 'react'
import { render } from '@testing-library/react'
import Loading from './Loading'

describe('Loading', () => {
  it('should render Loading', () => {
    const { container } = render(<Loading />)

    container.firstChild

    expect(container.firstChild).toBeInTheDocument()
  })
})
