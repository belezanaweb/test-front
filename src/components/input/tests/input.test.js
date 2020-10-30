import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Input from '../Input'

const changeMethod = jest.fn()
const inputValue = 'John'

const InputComponent = () => {
  return (
    <Input
      data-testid="test"
      label="Nome"
      onChange={changeMethod}
      name="name"
      error={{ message: 'Campo obrigatório' }}
    />
  )
}

test('click method is being called correctly', () => {
  const { getByTestId } = render(<InputComponent />)
  const input = getByTestId('test')
  fireEvent.change(input, { target: { value: inputValue } })
  expect(changeMethod).toHaveBeenCalledTimes(1)
})

test('renders input correctly', () => {
  const { getByTestId } = render(<InputComponent />)
  const input = getByTestId('test')
  fireEvent.change(input, { target: { value: inputValue } })
  expect(input.value).toBe(inputValue)
})

test('renders input with error', () => {
  render(<InputComponent />)
  const formattedText = screen.getByText('Campo obrigatório')
  expect(formattedText).toBeInTheDocument()
})
