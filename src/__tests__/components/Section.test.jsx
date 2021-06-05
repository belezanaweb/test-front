import React from 'react'

import { render } from '../../utils/test-utils'
import { Section } from '../../components'

describe('Section', () => {
  test('should render without errors', () => {
    const { container } = render(<Section />)
    expect(container).toBeInTheDocument()
  })

  test('should render with title without errors', () => {
    const { getByText } = render(<Section title="sample" />)

    const titleElement = getByText(/sample/)

    expect(titleElement).toBeInTheDocument()
  })

  test('should component render children', () => {
    const { getByTestId } = render(
      <Section title="sample">
        <span data-testid="test-children">section child</span>
      </Section>
    )

    const checkElement = getByTestId('test-children')

    expect(checkElement).toBeInTheDocument()
    expect(checkElement.innerHTML).toBe('section child')
  })

  test('should match with snapshot', () => {
    const { container } = render(<Section>section child</Section>)
    expect(container).toMatchSnapshot()
  })
})
