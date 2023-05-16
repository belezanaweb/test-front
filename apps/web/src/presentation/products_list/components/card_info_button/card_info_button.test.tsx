import { vi } from 'vitest'

import { PaymentFormProvider } from '@/presentation/payment_form'
import { render, screen, userEvent } from 'common-test-config'
import { CartInfoButton } from './card_info_button'

const mockUseFormContext = {
  handleSubmit: vi.fn(),
  formState: {
    isValid: false
  },
  reset: vi.fn()
}

vi.mock('react-hook-form', async () => ({
  ...await vi.importActual<any>('react-hook-form'),
  useFormContext: () => mockUseFormContext
}))

describe('BottomPaymentInformation', () => {
  let component: HTMLElement

  describe('[Button] on bag Tab', () => {
    const onCallToAction = vi.fn()

    beforeEach(() => {
      render(
        <PaymentFormProvider>
          <CartInfoButton tabKey="bag" onCallToAction={onCallToAction} />
        </PaymentFormProvider>
      )

      component = screen.getByText('Seguir para o pagamento')
    })

    it('should render bag button component correctly', () => {
      expect(component).toBeInTheDocument()
    })

    it('should click on button and handle correct behavior', async () => {
      await userEvent.click(component)
      expect(onCallToAction).toBeCalledWith('payment')
    })
  })

  describe('[Button] on payment Tab', () => {
    const onCallToAction = vi.fn()

    beforeEach(() => {
      render(
        <PaymentFormProvider>
          <CartInfoButton tabKey="payment" onCallToAction={onCallToAction} />
        </PaymentFormProvider>
      )

      component = screen.getByText('Finalizar pedido')
    })

    it('should render button component correctly', () => {
      expect(component).toBeInTheDocument()
    })

    it('should click on button and handle correct behavior', async () => {
      await userEvent.click(component)
      expect(onCallToAction).toBeCalledWith('confirmation')
    })
  })

  describe('[Button] on confirmation Tab', () => {
    const onCallToAction = vi.fn()

    beforeEach(() => {
      render(
        <PaymentFormProvider>
          <CartInfoButton tabKey="confirmation" onCallToAction={onCallToAction} />
        </PaymentFormProvider>
      )

      component = screen.getByText('Voltar ao início do protótipo')
    })

    it('should render confirmation button component correctly', () => {
      expect(component).toBeInTheDocument()
    })

    it('should click on button and handle correct behavior', async () => {
      await userEvent.click(component)
      expect(onCallToAction).toBeCalledWith('bag')
    })
  })
})
