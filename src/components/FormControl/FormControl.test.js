import React from 'react'
import { render, screen } from '@testing-library/react'
import FormControl from './FormControl'

const FormControlDefaultProps = {
  label: 'label',
  errorMessage: 'campo obrigatorio',
  id: 'field_1',
  name: 'field_1'
}

describe('FormControl', () => {
  it('should render FormControl', () => {
    const { container } = render(<FormControl {...FormControlDefaultProps} />)

    container.firstChild

    expect(container.firstChild).toBeInTheDocument()
  })

  it('should not render label if it is not provided', () => {
    render(<FormControl {...FormControlDefaultProps} label={null} />)

    const label = screen.queryByTestId('input-label')

    expect(label).not.toBeInTheDocument()
  })

  it('should render label if it is provided', () => {
    render(<FormControl {...FormControlDefaultProps} />)

    const label = screen.queryByTestId('input-label')

    expect(label).toBeInTheDocument()
  })

  it('should not render error message if it is not provided', () => {
    const { container } = render(<FormControl {...FormControlDefaultProps} errorMessage={null} />)

    const errorMessage = container.querySelector(`#${FormControlDefaultProps.id}-error`)

    expect(errorMessage).not.toBeInTheDocument()
  })

  it('should render error message if it is provided', () => {
    const { container } = render(<FormControl {...FormControlDefaultProps} />)

    const errorMessage = container.querySelector(`#${FormControlDefaultProps.id}-error`)

    expect(errorMessage).toBeInTheDocument()
  })
})
