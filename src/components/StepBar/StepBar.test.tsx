import React from 'react'
import { render, screen } from '@testing-library/react'

import StepBar from './'

test('render StepBar component', () => {
  render(<StepBar />)

  expect(screen.getByText(/StepBar/i)).toBeInTheDocument()
})
