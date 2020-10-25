import React from 'react'
import { render, screen } from '@testing-library/react'

import CartTable from './'

test('render CartTable component', () => {
  render(<CartTable />)

  expect(screen.getByText(/cartTable/i)).toBeInTheDocument()
})
