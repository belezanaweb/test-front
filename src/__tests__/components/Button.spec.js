import { render, screen, fireEvent } from '@testing-library/react'
import React from 'react'

import { Button } from '../../components'

describe('Testing Button.js', () => {
  it('should be able render button', () => {
    render(<Button label="test" />)
    expect(screen.getByRole('button', { name: 'test', exact: true })).toBeInTheDocument()
  })

  it('should be able render disabled button', () => {
    render(<Button label="test" disabled />)
    expect(screen.getByRole('button')).toBeDisabled()
  })

  it('should be able calls onClick prop when clicked', () => {
    const handleClick = jest.fn()
    render(<Button label="test" onClick={handleClick} />)

    fireEvent.click(screen.getByRole('button'))

    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
