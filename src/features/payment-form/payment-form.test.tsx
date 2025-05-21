import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { useForm, FormProvider } from 'react-hook-form'
import { PaymenteForm } from './payment-form.component'
import { CreditCardFormData } from '../../widgets/checkout/useCheckoutForm'
import { MOCK_BAG } from '../../test/mocks/bag-products.mock'


const WrapperWithForm = ({ children }: { children: React.ReactNode }) => {
  const methods = useForm<CreditCardFormData>({
    defaultValues: {
      payment: {
        cardNumber: '',
        cardHolder: '',
        expiryDate: '',
        cvv: '',
      },
    },
  })

  return <FormProvider {...methods}>{children}</FormProvider>
}

describe('PaymenteForm', () => {
  it('deve renderizar os campos do formulário de cartão', () => {
    render(<PaymenteForm bag={MOCK_BAG} />, {
      wrapper: WrapperWithForm,
    })

    expect(screen.getByLabelText('Número')).toBeInTheDocument()
    expect(screen.getByLabelText('Nome do titular do cartão')).toBeInTheDocument()
    expect(screen.getByLabelText('Data de validade')).toBeInTheDocument()
    expect(screen.getByLabelText('Código CVV:')).toBeInTheDocument()
    expect(screen.getByText('Cartão de crédito')).toBeInTheDocument()
  })
})
