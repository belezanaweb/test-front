import { render } from '@/test/utils'

import { LoadingSpinner } from '.'

test('renders default state', () => {
  const { container } = render(<LoadingSpinner />)

  expect(container).toMatchInlineSnapshot(`
    <div>
      <svg
        class="animate-spin -ml-1 mr-3"
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
    </div>
  `)
})

test('render custom props', () => {
  const { getByTestId } = render(<LoadingSpinner data-testid="loading-spinner" />)

  expect(getByTestId('loading-spinner')).toBeInTheDocument()
})

test('renders with custom classnames', () => {
  const { getByTestId } = render(
    <LoadingSpinner data-testid="loading-spinner" className="custom-class" />
  )

  expect(getByTestId('loading-spinner')).toHaveClass('custom-class')
})
