import { Button, Tabs, useTabs } from 'ui'
import { CartInfo, CartTab, ConfirmationTab } from '@/components'
import { PaymentTab } from '@/components/payment-tab/payment-tab'

const tabsTriggersList = [
  {
    key: 'cart',
    content: 'Sacola'
  },
  {
    key: 'payment',
    content: 'Pagamento'
  },
  {
    key: 'confirmation',
    content: 'Confirmação',
    isDisabled: true
  }
]

export default function Cart() {
  const tabs = useTabs({ tabKey: 'cart' })

  return (
    <>
      <Tabs.Root {...tabs}>
        <Tabs.List>
          {tabsTriggersList.map((tab) => (
            <Tabs.Trigger
              key={tab.key}
              className="md:p-4 md:text-base"
              tabKey={tab.key}
              isDisabled={tab.isDisabled}
            >
              {tab.content}
            </Tabs.Trigger>
          ))}
        </Tabs.List>
        <div className="flex flex-col md:m-auto md:max-w-4xl md:flex-row md:justify-between md:gap-6">
          <div className="w-full bg-neutral-400 px-2 py-5 md:bg-transparent md:py-10">
            <Tabs.Content tabKey="cart">
              <CartTab />
            </Tabs.Content>
            <Tabs.Content tabKey="payment">
              <PaymentTab />
            </Tabs.Content>
            <Tabs.Content tabKey="confirmation">
              <ConfirmationTab />
            </Tabs.Content>
          </div>
          <CartInfo.Root>
            <CartInfo.Data
              discount={30}
              subTotal={624.8}
              shippingTotal={5.3}
              quantity={3}
              total={600.1}
            />
            {tabs.tabKey === 'cart' && (
              <Button onClick={() => tabs.setTabKey('payment')}>Seguir para o pagamento</Button>
            )}
            {tabs.tabKey === 'payment' && (
              <Button onClick={() => tabs.setTabKey('confirmation')}>Finalizar pedido</Button>
            )}
            {tabs.tabKey === 'confirmation' && (
              <Button color="black" onClick={() => tabs.setTabKey('cart')}>
                Voltar ao início do protótipo
              </Button>
            )}
          </CartInfo.Root>
        </div>
      </Tabs.Root>
    </>
  )
}
