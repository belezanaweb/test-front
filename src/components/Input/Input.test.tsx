import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { render } from '../../utils/test-utils'

import { Input } from '.'

describe('Input component', () => {
  it('renders with placeholder', () => {
    render(<Input placeholder="placeholder text" onChange={() => {}} label={'Label'} />)

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
    expect(onInputChange).toHaveBeenCalledWith(text)
  })

  it('Renders with error', () => {
    const { container } = render(
      <Input label="Label" error={{ message: 'Error message' }} onChange={() => {}} />
    )

    expect(screen.getByText('Error message')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
