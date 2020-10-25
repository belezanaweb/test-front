import React from 'react'
import { render, screen } from '@testing-library/react'

import Loading from './'

test('render Loading component', () => {
  render(<Loading />)

  expect(screen.getByText(/Loading/i)).toBeInTheDocument()
})
