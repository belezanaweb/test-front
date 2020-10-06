import React from 'react'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import Navigation from './Navigation'

describe('Navigation Component', () => {
  test('renders links', async () => {
    const { asFragment } = render(<Navigation />, { wrapper: MemoryRouter })

    expect(asFragment()).toMatchSnapshot()
  })
})
