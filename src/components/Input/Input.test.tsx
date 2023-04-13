import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { render } from '../../utils/test-utils'

import { Input } from '.'

jest.mock('react-hook-form', () => ({
  ...jest.requireActual('react-hook-form'),
  useFormContext: jest.fn().mockReturnValue({
    register: () => {
      return {
        name: 'test', // assign name prop
        onChange: jest.fn() // assign onChange event
      }
    },
    formState: { errors: { test: { message: 'Error message' } } }
  })
}))

describe('Input component', () => {
  it('renders with placeholder', () => {
    render(<Input name="test" placeholder="placeholder text" onChange={() => {}} label={'Label'} />)

    expect(screen.getByPlaceholderText('placeholder text')).toBeInTheDocument()
  })

  it('changes value when typing', async () => {
    const onInputChange = jest.fn()
    render(<Input onChange={onInputChange} label="Label" name="Label" />)

    const input = screen.getByRole('textbox')
    const text = 'text changed'
    userEvent.type(input, text)

    await waitFor(() => {
      expect(input).toHaveValue(text)
      expect(onInputChange).toHaveBeenCalledTimes(text.length)
    })
  })

  it('Renders with error', () => {
    const { container } = render(<Input name="test" label="Label" />)

    expect(screen.getByText('Error message')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
