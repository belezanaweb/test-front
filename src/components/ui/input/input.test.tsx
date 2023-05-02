import { render } from '@/test/utils'

import { Input } from '.'

test('renders default state', () => {
  const { getByRole } = render(<Input />)

  expect(getByRole('textbox')).toMatchInlineSnapshot(`
    <input
      class="block w-full rounded border border-gray-light p-3 text-sm placeholder-gray-light focus:border-brand focus:ring-brand"
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
