import React from 'react'
import { render } from '../../utils/test-utils'
import { BannerSuccess } from '../../components'

describe('BannerSuccess', () => {
  test('should render without errors', () => {
    const { container } = render(<BannerSuccess title="sample" />)
    expect(container).toBeInTheDocument()
  })

  test('should component render children', () => {
    const { getByText } = render(<BannerSuccess title="sample" />)
    const titleElement = getByText(/sample/i)
    expect(titleElement).toBeInTheDocument()
  })

  test('should match with snapshot', () => {
    const { container } = render(<BannerSuccess title="sample" />)
    expect(container).toMatchSnapshot()
  })
})
