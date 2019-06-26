import React from 'react'
import { render } from 'test-utils'
import { axe } from 'jest-axe'
import Loading from '.'

describe('Loading', () => {
  it('should render [snapshot]', () => {
    const { container } = render(<Loading />)
    expect(container).toMatchSnapshot()
  })

  it('should be valid (a11y)', async () => {
    const { container } = render(<Loading />)
    expect(await axe(container.innerHTML)).toHaveNoViolations()
  })
})
