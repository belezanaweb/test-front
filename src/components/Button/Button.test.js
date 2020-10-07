import React from 'react'
import { render } from '@testing-library/react'

import Button from './Button'

describe('Button Component', () => {
  test('renders a button', async () => {
    const { asFragment } = render(<Button path={''} text={''} handleClick={() => {}} />)

    expect(asFragment()).toMatchSnapshot()
  })
  test('renders a button with path and text', async () => {
    const { asFragment } = render(<Button path={'/foo'} text={'bar'} handleClick={() => {}} />)

    expect(asFragment()).toMatchSnapshot()
  })
})
