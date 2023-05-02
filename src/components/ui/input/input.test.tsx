import { render } from '@/test/utils'

import { Input } from '.'

test('renders default state', () => {
  const { getByRole } = render(<Input />)

  expect(getByRole('textbox')).toMatchInlineSnapshot(`
    <input
      class="border border-gray-light text-sm rounded focus:ring-brand focus:border-brand block w-full p-3 placeholder-gray-light"
      type="text"
    />
  `)
})

test('renders custom props', () => {
  const { getByRole } = render(<Input data-testid="input" />)

  expect(getByRole('textbox')).toHaveAttribute('data-testid', 'input')
})

test('renders error state', () => {
  const { getByRole } = render(<Input isError />)

  expect(getByRole('textbox')).toHaveClass('border-error')
})

test('renders error message', () => {
  const { getByText } = render(<Input isError errorMessage="Error message" />)

  expect(getByText(/Error message/i)).toBeInTheDocument()
})
