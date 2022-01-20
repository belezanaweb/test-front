import { render } from '@testing-library/react'
import React from 'react'
import Button from './index'
import { MemoryRouter } from 'react-router-dom'

describe('Button', () => {
  it('disables', () => {
    const { getByRole } = render(<Button disabled />, {
      wrapper: ({ children }) => <MemoryRouter>{children}</MemoryRouter>
    })
    expect(getByRole('button')).toBeDisabled()
  })
})
