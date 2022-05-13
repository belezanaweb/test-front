import React from 'react'
import Loader from '../../components/Loader'
import { render } from '../../util/test-utils'

describe('Loader Component', () => {
  it('should render correctly', () => {
    const { container } = render(<Loader />)

    const svgEl = container.querySelector(
      "[data-icon='loader']"
    ) as HTMLImageElement

    expect(svgEl).toBeInTheDocument()
  })
})
