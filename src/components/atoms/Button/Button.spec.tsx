import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render, screen } from '@testing-library/react'

import Button from './index'

describe('[Atoms] - Button', () => {
  it('should render on screen', () => {
    const label = 'Button label'

    render(<Button func={() => {}}>{label}</Button>)

    expect(screen.getByText(label)).toBeInTheDocument()
  })

  it('should call function', () => {
    const label = 'Button label'
    const handleClick = jest.fn()

    render(<Button func={handleClick}>{label}</Button>)

    fireEvent.click(screen.getByText(label))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
