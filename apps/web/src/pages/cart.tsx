import { Button, Tabs, useTabs } from 'ui'
import {
  CartInfo,
  CartTab,
  ConfirmationTab,
  PAYMENT_TAB_FORM_ID,
  PaymentTab,
  Skeleton
} from '@/components'
import { useFetchCart } from '@/hooks'

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
  const { isLoading } = useFetchCart()
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
            <CartInfo.Data />
            {isLoading ? (
              <Skeleton className="h-14" />
            ) : (
              <>
                {tabs.tabKey === 'cart' && (
                  <Button onClick={() => tabs.setTabKey('payment')}>Seguir para o pagamento</Button>
                )}
                {tabs.tabKey === 'payment' && (
                  <Button type="submit" form={PAYMENT_TAB_FORM_ID}>
                    Finalizar pedido
                  </Button>
                )}
                {tabs.tabKey === 'confirmation' && (
                  <Button color="black" onClick={() => tabs.setTabKey('cart')}>
                    Voltar ao início do protótipo
                  </Button>
                )}
              </>
            )}
          </CartInfo.Root>
        </div>
      </Tabs.Root>
    </>
  )
}
