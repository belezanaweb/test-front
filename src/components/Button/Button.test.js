import React from 'react'
import { render } from 'test-utils'
import Button from '.'

describe('Button', () => {
  it('should render [snapshot]', () => {
    const { container } = render(<Button />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render with disabled attribute [snapshot]', () => {
    const { container } = render(<Button disabled />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
