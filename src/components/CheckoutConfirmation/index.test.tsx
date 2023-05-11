import { render } from 'test/setup-test'
import { CheckoutConfirmation } from './index'

describe('CheckoutConfirmation', () => {
  it('should render all properties correctly', () => {
    const props = {
      title: 'Compra efetuada com sucesso',
      creditCardNumber: '1234 5678 9012 3456',
      creditCardName: 'Fulano de Tal',
      creditCardExpiration: '12/2022'
    }

    const { getByText } = render(<CheckoutConfirmation {...props} />)
    expect(getByText(props.title)).toBeInTheDocument()
    expect(getByText('****.****.****.3456')).toBeInTheDocument()
    expect(getByText(props.creditCardName)).toBeInTheDocument()
    expect(getByText(props.creditCardExpiration)).toBeInTheDocument()
  })
})
