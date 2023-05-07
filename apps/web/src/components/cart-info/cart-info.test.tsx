import { screen, setup, waitForElementToBeRemoved, wrapper } from '@/test/utils'
import { CartInfo } from '.'
import { Tabs } from 'ui'
import { FormProvider, useForm } from 'react-hook-form'

describe('CartInfo', () => {
  it('should render properly', async () => {
    setup(
      <CartInfo.Root>
        <CartInfo.Data />
      </CartInfo.Root>,
      { wrapper }
    )

    await waitForElementToBeRemoved(() => screen.queryAllByTestId('skeleton'))

    expect(screen.getByText('Produtos: (2 itens)')).toBeInTheDocument()
    expect(screen.getByText('R$ 600,10')).toBeInTheDocument()

    expect(screen.getByText('Frete')).toBeInTheDocument()
    expect(screen.getByText('R$ 5,30')).toBeInTheDocument()

    expect(screen.getByText('Desconto')).toBeInTheDocument()
    expect(screen.getByText('R$ 30,00')).toBeInTheDocument()

    expect(screen.getByText('Subtotal')).toBeInTheDocument()
    expect(screen.getByText('R$ 624,80')).toBeInTheDocument()
  })

  it('should render the cart tab button', async () => {
    function Component() {
      const methods = useForm()
      return (
        <Tabs.Root tabKey="cart" setTabKey={() => undefined}>
          <FormProvider {...methods}>
            <CartInfo.Submit />
          </FormProvider>
        </Tabs.Root>
      )
    }

    setup(<Component />, { wrapper })

    await waitForElementToBeRemoved(() => screen.queryAllByTestId('skeleton'))

    expect(screen.getByRole('button', { name: 'Seguir para o pagamento' })).toBeInTheDocument()
  })

  it('should render the payment tab button', async () => {
    function Component() {
      const methods = useForm()
      return (
        <Tabs.Root tabKey="payment" setTabKey={() => undefined}>
          <FormProvider {...methods}>
            <CartInfo.Submit />
          </FormProvider>
        </Tabs.Root>
      )
    }

    setup(<Component />, { wrapper })

    await waitForElementToBeRemoved(() => screen.queryAllByTestId('skeleton'))

    expect(screen.getByRole('button', { name: 'Finalizar pedido' })).toBeInTheDocument()
  })

  it('should render the confirmation tab button', async () => {
    function Component() {
      const methods = useForm()
      return (
        <Tabs.Root tabKey="confirmation" setTabKey={() => undefined}>
          <FormProvider {...methods}>
            <CartInfo.Submit />
          </FormProvider>
        </Tabs.Root>
      )
    }

    setup(<Component />, { wrapper })

    await waitForElementToBeRemoved(() => screen.queryAllByTestId('skeleton'))

    expect(
      screen.getByRole('button', { name: 'Voltar ao início do protótipo' })
    ).toBeInTheDocument()
  })
})
