import React from 'react'

import { render, screen } from '@testing-library/react'

import '@testing-library/jest-dom'

import Input from '.'

describe('<Input />', () => {
  it('Should display Label of input', () => {
    const label = 'Errors will be displayed here'
    render(<Input label={label} />)

    expect(screen.getByText(`${label}:`)).toBeInTheDocument()
  })

  it('Should display errors in the input', () => {
    const fallBack = 'Errors will be displayed here'
    render(<Input error={fallBack} />)

    expect(screen.getByText(fallBack)).toBeInTheDocument()
  })
})
