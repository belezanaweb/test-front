import { screen, setup, wrapper, fireEvent } from '@/test/utils'
import { PaymentTab, PaymentTabFormProvider } from '.'
import { Tabs } from 'ui'

describe('PaymentTab', () => {
  it('should show error message properly', async () => {
    function Component() {
      return (
        <PaymentTabFormProvider>
          <Tabs.Root tabKey="payment" setTabKey={() => undefined}>
            <PaymentTab />
          </Tabs.Root>
        </PaymentTabFormProvider>
      )
    }

    setup(<Component />, { wrapper })

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
