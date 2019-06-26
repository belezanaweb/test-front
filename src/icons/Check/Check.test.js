import React from 'react'
import { render } from 'test-utils'
import Check from '.'

describe('Check icon', () => {
  it('should render [snapshot]', () => {
    const { container } = render(<Check />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
