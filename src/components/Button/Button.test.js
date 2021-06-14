import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Button from './Button'

const ButtonDefaultProps = {
  children: 'button',
  onClick: jest.fn()
}

describe('Button', () => {
  it('should render Button', () => {
    const { container } = render(<Button {...ButtonDefaultProps} />)

    container.firstChild

    expect(container.firstChild).toBeInTheDocument()
  })

  it('should call onClick when Button is clicked', () => {
    const mockOnClick = jest.fn()

    render(<Button {...ButtonDefaultProps} onClick={mockOnClick} />)

    fireEvent.click(screen.getByRole('button'))

    expect(mockOnClick).toHaveBeenCalled()
  })

  it('should render children prop when it is passed as param', () => {
    render(<Button {...ButtonDefaultProps} />)

    expect(screen.getByText(ButtonDefaultProps.children)).toBeInTheDocument()
  })
})
