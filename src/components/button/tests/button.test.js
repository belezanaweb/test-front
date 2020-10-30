import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Button from '../Button'

const handleClick = jest.fn()
const label = 'Seguir para o pagamento'
const ButtonComponent = () => <Button onClick={handleClick}>{label}</Button>

test('renders button correctly', () => {
  render(<ButtonComponent />)
  const buttonText = screen.getByText(label)

  expect(buttonText).toBeInTheDocument()
})

test('triggers click method', () => {
  render(<ButtonComponent />)
  userEvent.click(screen.getByText(label))

  expect(handleClick).toHaveBeenCalledTimes(1)
})
