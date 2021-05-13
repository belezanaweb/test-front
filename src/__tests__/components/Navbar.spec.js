import { render, screen } from '@testing-library/react'
import React from 'react'

import { Navbar } from '../../components'

describe('Testing Navbar.js', () => {
  it('should be able render navbar', () => {
    render(
      <Navbar
        items={[
          { key: 1, name: 'Test1', active: true },
          { key: 2, name: 'Test2' }
        ]}
      />
    )

    expect(screen.getByText('Test1')).toBeTruthy()
    expect(screen.getByText('Test2')).toBeTruthy()
  })
})
