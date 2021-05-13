import { render, screen } from '@testing-library/react'
import React from 'react'

import { SuccessMessage } from '../../components'

describe('Testing SuccessMessage.js', () => {
  it('should be able render SuccessMessage', () => {
    render(<SuccessMessage message="Test" />)

    expect(screen.getByText('Test')).toBeTruthy()
  })
})
