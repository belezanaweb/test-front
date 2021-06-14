import React from 'react'
import { render } from '@testing-library/react'
import ConfirmationMessage from './ConfirmationMessage'

describe('ConfirmationMessage', () => {
  it('should render ConfirmationMessage', () => {
    const { container } = render(<ConfirmationMessage />)

    container.firstChild

    expect(container.firstChild).toBeInTheDocument()
  })
})
