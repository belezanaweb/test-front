import React from 'react'
import { render } from '@testing-library/react'
import Button from '.'

describe('Button', () => {
  it('should render [snapshot]', () => {
    const { container } = render(<Button />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
