import { render, fireEvent } from 'test/setup-test'
import { vi } from 'vitest'
import 'jest-styled-components'
import { Button } from './index'
import { theme } from 'utils/theme'

describe('Button', () => {
  it('should render correctly', () => {
    const { getByText } = render(<Button title="Click me" onClick={() => {}} />)
    expect(getByText('Click me')).toBeInTheDocument()
  })

  it('should call onClick when clicked', () => {
    const handleClick = vi.fn()
    const { getByText } = render(
      <Button title="Click me" onClick={handleClick} />
    )
    fireEvent.click(getByText('Click me'))
    expect(handleClick).toHaveBeenCalled()
  })

  it('should render with the primary type if no type is provided', () => {
    const { getByText } = render(<Button title="Click me" onClick={() => {}} />)
    expect(getByText('Click me')).toHaveStyleRule(
      'background-color',
      theme.colors.purple
    )
  })

  it('should render with the default type if type="default" is provided', () => {
    const { getByText } = render(
      <Button title="Click me" type="default" onClick={() => {}} />
    )
    expect(getByText('Click me')).toHaveStyleRule(
      'background-color',
      theme.colors.black
    )
  })
})
