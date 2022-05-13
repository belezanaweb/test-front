import userEvent from '@testing-library/user-event'
import React from 'react'
import TextField from '../../components/TextField'
import { render, screen } from '../../util/test-utils'

describe('TextField Component', () => {
  it('should render with label', () => {
    render(<TextField label="Label" name="Label" />)
    expect(screen.getByLabelText('Label')).toBeInTheDocument()
  })

  it('should render without Label', () => {
    render(<TextField />)
    expect(screen.queryByLabelText('Label')).not.toBeInTheDocument()
  })

  it('should render with placeholder', () => {
    render(<TextField placeholder="hey you" />)
    expect(screen.getByPlaceholderText('hey you')).toBeInTheDocument()
  })

  it('Changes its value when typing', async () => {
    const onInputChange = jest.fn()
    render(
      <TextField
        onInputChange={onInputChange}
        label="TextField"
        name="TextField"
      />
    )
    const input = screen.getByRole('textbox')
    const text = 'This is my new text'
    await userEvent.type(input, text)

    expect(input).toHaveValue(text)
  })

  it('Renders with error', () => {
    render(<TextField label="TextField" error="Error message" />)

    expect(screen.getByText('Error message')).toBeInTheDocument()
  })

  it('Is accessible by tab', () => {
    render(<TextField label="TextField" name="TextField" />)
    const input = screen.getByLabelText('TextField')
    expect(document.body).toHaveFocus()
    userEvent.tab()
    expect(input).toHaveFocus()
  })
})
