import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Button from '../Button'
describe('Test of Button', () => {
  test('Verify rendering', () => {
    const testFunction = jest.fn()
    render(<Button text="test" onClick={testFunction} />)
    expect(screen.getByText('test')).toBeInTheDocument()
    fireEvent.click(screen.getByText('test'))
    expect(testFunction).toBeCalled()
  })
})
