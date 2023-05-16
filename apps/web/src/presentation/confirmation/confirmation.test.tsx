import { fakeCartModel } from '@/test/mocks'
import { render, screen } from 'common-test-config'
import { PaymentFormProvider } from '../payment_form'
import Confirmation from './Confirmation'

describe('Confirmation Component', () => {
  let element: HTMLElement

  it('should render element correctly', () => {
    render(
      <PaymentFormProvider>
        <Confirmation items={fakeCartModel.items} />
      </PaymentFormProvider>
    )

    element = screen.getByTestId('confirmation-component')
    expect(element).toBeInTheDocument()
  })

  it('should find order description elements', () => {
    const { container } = render(
      <PaymentFormProvider>
        <Confirmation items={fakeCartModel.items} />
      </PaymentFormProvider>
    )

    const elements = container.querySelector('p')
    expect(elements).toBeInTheDocument()
  })
})
