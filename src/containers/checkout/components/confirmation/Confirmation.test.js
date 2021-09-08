import React from 'react'
import { render, screen } from '@testing-library/react'

import Confirmation from '.'

describe('Confirmation component', () => {
  it('Should render correctly', async () => {
    const values = {
      cardNumber: '1111222233334444',
      name: 'Card test',
      validity: 222022
    }

    render(<Confirmation form={{ values }} />)

    expect(
      screen.getByRole('heading', {
        name: /pagamento/i
      })
    ).toBeInTheDocument()
    expect(screen.getByText(/\*\*\*\*\.\*\*\*\*\.\*\*\*\*\.4444/i)).toBeInTheDocument()
    expect(screen.getByText(/card test/i)).toBeInTheDocument()
    expect(screen.getByText(/22\/2022/i)).toBeInTheDocument()
  })
})
