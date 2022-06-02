import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'

import Link from './index'

describe('[Atoms] - Link', () => {
  it('should render on screen', () => {
    const label = 'Text label'

    render(<Link active={true}>{label}</Link>)

    expect(screen.getByText(label)).toBeInTheDocument()
  })
})
