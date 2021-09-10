import React from 'react'
import { screen, render, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import Button from '@/components/Button'

const mockHistoryPush = jest.fn()

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush
  })
}))

describe('Button Component', () => {
  test('Should submit the form', async () => {
    const onSubmit = jest.fn((e) => e.preventDefault())

    render(
      <form onSubmit={onSubmit}>
        <Button text="Submit" isSubmit />
      </form>
    )

    const button = await screen.findByTestId('button')

    fireEvent.click(button)

    expect(button.innerHTML).toBe('Submit')
    expect(onSubmit).toHaveBeenCalled()
  })

  test('Should redirect to the href', async () => {
    render(
      <MemoryRouter>
        <Button text="Submit" href="/cart" />
      </MemoryRouter>
    )

    const button = await screen.findByTestId('button')

    fireEvent.click(button)

    expect(mockHistoryPush).toHaveBeenCalledWith('/cart')
  })
})
