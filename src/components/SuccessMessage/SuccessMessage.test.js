import React from 'react'
import { render } from 'test-utils'
import SuccessMessage from '.'

describe('SuccessMessage', () => {
  it('should render [snapshot]', () => {
    const { container } = render(<SuccessMessage />)
    expect(container).toMatchSnapshot()
  })
})
