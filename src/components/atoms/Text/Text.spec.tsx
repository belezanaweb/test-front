import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'

import Text from './index'

describe('[Atoms] - Text', () => {
  it('should render on screen', () => {
    const label = 'Text label'

    render(<Text type="text">{label}</Text>)

    expect(screen.getByText(label)).toBeInTheDocument()
  })
})
