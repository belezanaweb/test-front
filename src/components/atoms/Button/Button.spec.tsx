import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'

import Button from './index'

describe('[Atoms] - Button', () => {
  it('should render on screen', () => {
    const label = 'Button label'

    render(<Button func={() => {}}>{label}</Button>)

    expect(screen.getByText(label)).toBeInTheDocument()
  })
})
