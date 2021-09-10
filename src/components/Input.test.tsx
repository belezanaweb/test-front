import React from 'react'
import { screen, render } from '@testing-library/react'

import Input from '@/components/Input'

describe('Input Component', () => {
  test('Should render label correctly', async () => {
    render(<Input label="Cartão" />)

    const inputLabel = await screen.findByTestId('input-label')
    expect(inputLabel.innerHTML).toBe('Cartão')
  })

  test('Should render error correctly', async () => {
    render(<Input label="Cartão" error={{ message: 'Campo obrigatório' }} />)

    const inputLabel = await screen.findByTestId('input-error')
    expect(inputLabel.innerHTML).toBe('Campo obrigatório')
  })
})
