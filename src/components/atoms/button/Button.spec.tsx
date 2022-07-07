import React from 'react'
import { render, fireEvent } from '../../../test-utils'
import { Button } from './Button'

const buttonText = 'seguir para o pagamento'

const renderComponent = (action: () => void = jest.fn()) =>
  render(<Button onClick={action}>{buttonText}</Button>)

describe('Button', () => {
  test('renders correctly', () => {
    const { getByText } = renderComponent()
    const linkElement = getByText(buttonText)
    expect(linkElement).toBeTruthy()
  })

  test('triggers click function', async () => {
    const action = jest.fn()
    const { getByRole } = renderComponent(action)

    const button = getByRole('button')
    await fireEvent.click(button)

    expect(action).toHaveBeenCalledTimes(1)
  })
})
