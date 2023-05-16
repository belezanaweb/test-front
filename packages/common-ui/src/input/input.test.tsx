import { render, screen } from 'common-test-config'
import { InputField } from './input'

describe('InputFieldComponent', () => {
  it('should render component correctly', () => {
    render(<InputField label="Test" />)
    const component = screen.queryByTestId('common-ui-input')

    expect(component).toBeInTheDocument()
  })

  it('should not render label if not exists', () => {
    render(<InputField />)
    const component = screen.queryByTestId('common-ui-input-label')

    expect(component).not.toBeInTheDocument()
  })

  it('should show error state when errorText value is provided', () => {
    render(<InputField label="Test" errorText="invalid" />)
    const component = screen.getByText('invalid')

    expect(component).toBeInTheDocument()
  })
})
