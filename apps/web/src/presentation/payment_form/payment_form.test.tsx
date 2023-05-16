import { fireEvent, render, screen } from 'common-test-config/src/utils'
import PaymentForm, { PaymentFormProvider } from './payment_form'

describe('PaymentForm', () => {
  let element: HTMLElement

  beforeEach(() => {
    render(
      <PaymentFormProvider>
        <PaymentForm />
      </PaymentFormProvider>
    )

    element = screen.getByTestId('common-ui-card')
  })

  it('should render element correctly', () => {
    expect(element).toBeInTheDocument()
  })

  it('should show error message when user touch inputs', async () => {
    fireEvent.blur(screen.getByLabelText('Número'))
    expect(await screen.findByText('insira um número de cartão válido')).toBeInTheDocument()

    fireEvent.blur(screen.getByLabelText('Nome do titular do cartão'))
    expect(await screen.findByText('insira um nome válido')).toBeInTheDocument()

    fireEvent.blur(screen.getByLabelText('Data de validade'))
    expect(await screen.findByText('insira uma data válida')).toBeInTheDocument()

    fireEvent.blur(screen.getByLabelText('Código CVV'))
    expect(await screen.findByText('insira um cvv válido')).toBeInTheDocument()
  })
})
