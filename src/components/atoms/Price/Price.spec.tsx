import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'

import Price from './index'

describe('[Atoms] - Price', () => {
  it('should render on screen', () => {
    const label = 'Price label'

    render(<Price type="total">{label}</Price>)

    expect(screen.getByText(label)).toBeInTheDocument()
  })
})
