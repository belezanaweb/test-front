import React from 'react'
import { render, screen, fireEvent, waitForElement } from '@testing-library/react'
import Button from './Button'

describe('<Button />', () => {
  it('checks hover', async () => {
    render(<Button />)
    expect(screen.getByTestId('defaultButton')).toHaveStyle('background-color: #FF6C00')
    fireEvent.mouseEnter(screen.getByTestId('defaultButton'))
    await waitForElement(() => screen.getByTestId('defaultButton'))
    expect(screen.getByTestId('defaultButton')).toHaveStyle('background-color: #D45A00')
  })
})
