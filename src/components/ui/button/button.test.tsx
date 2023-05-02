import { render } from '@/test/utils'

import { Button } from '.'

test('renders children components', () => {
  const { container } = render(<Button>Children</Button>)

  expect(container).toMatchInlineSnapshot(`
    <div>
      <button
        class="w-full rounded px-2 py-4 text-white text-lg flex justify-center text-center font-bold disabled:opacity-50 disabled:pointer-events-none bg-brand"
      >
        Children
      </button>
    </div>
  `)
})

test('renders custom props', () => {
  const { getByRole } = render(<Button type="submit">Children</Button>)

  expect(getByRole('button')).toHaveAttribute('type', 'submit')
})

test('renders dark variant', () => {
  const { getByRole } = render(<Button variant="dark">Children</Button>)

  expect(getByRole('button')).toHaveClass('bg-black')
})

test('renders loading spinner variant', () => {
  const { getByRole } = render(<Button isLoading>Children</Button>)

  expect(getByRole('button')).toMatchInlineSnapshot(`
    <button
      class="w-full rounded px-2 py-4 text-white text-lg flex justify-center text-center font-bold disabled:opacity-50 disabled:pointer-events-none bg-brand"
    >
      <svg
        class="-ml-1 mr-3 animate-spin h-7 w-7 text-white"
        fill="none"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        />
        <path
          class="opacity-75"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          fill="currentColor"
        />
      </svg>
    </button>
  `)
})
