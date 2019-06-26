import React from 'react'
import { render } from 'test-utils'
import Input from '.'

describe('Input', () => {
  it('should render [snapshot]', () => {
    const { container } = render(<Input type="text" />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
