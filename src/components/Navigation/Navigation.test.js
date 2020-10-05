import React from 'react'
import { render } from '@testing-library/react'

import Navigation from './Navigation'

describe('Navigation Component', () => {
  test('renders links', async () => {
    const { asFragment } = render(<Navigation />)

    expect(asFragment()).toMatchSnapshot()
  })
})
