import React from 'react'
import { render, screen } from '@testing-library/react'

import StepBar from './'

test('render StepBar component', () => {
  render(
    <StepBar
      steps={[
        { name: 'Sacola', isActive: false },
        { name: 'Pagamento', isActive: true },
        { name: 'Confirmação', isActive: false }
      ]}
    />
  )

  expect(screen.getByText(/Sacola/i)).toBeInTheDocument()
})
