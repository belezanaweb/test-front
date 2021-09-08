import React from 'react'
import { render, screen } from '@testing-library/react'
import Input from '.'

describe('Input component', () => {
  it('Should render correctly', () => {
    render(
      <Input
        form={{ values: {} }}
        name="cvv"
        label="CVV:"
        placeholder="___"
        masks={['999']}
        maxLength={3}
      />
    )
  })

  it('Should show error', () => {
    render(
      <Input
        form={{
          values: {},
          errors: { cvv: 'Preenchimento obrigatório' }
        }}
        name="cvv"
        label="CVV:"
        placeholder="___"
        masks={['999']}
        maxLength={3}
      />
    )

    const errorElement = screen.getByText('Preenchimento obrigatório')

    expect(errorElement).toBeInTheDocument()
    expect(errorElement).toHaveStyle('color: #f30')
  })
})
