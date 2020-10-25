import React from 'react'
import { render, screen } from '@testing-library/react'

import Image from './'

test('render Image component', () => {
  render(<Image />)

  expect(screen.getByText(/Image/i)).toBeInTheDocument()
})
