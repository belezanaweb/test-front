import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'

import Button from '.'

describe('Button component', () => {
  it('Should render correctly', async () => {
    render(<Button title="SEGUIR PARA PAGAMENTO" />)

    expect(screen.getByText('SEGUIR PARA PAGAMENTO')).toBeInTheDocument()
  })

  it('Should be clickable', async () => {
    const onClick = jest.fn()

    render(<Button onClick={onClick} />)

    fireEvent.click(screen.getByRole('button'))

    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
