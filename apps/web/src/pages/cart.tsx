import { Button, Tabs, useTabs } from 'ui'
import { CartInfo, CartProductItem } from '@/components'

const tabsTriggersList = [
  {
    key: 'sacola',
    content: 'Sacola'
  },
  {
    key: 'pagamento',
    content: 'Pagamento'
  },
  {
    key: 'confirmacao',
    content: 'Confirmação',
    isDisabled: true
  }
]

export default function Cart() {
  const tabs = useTabs({ tabKey: 'sacola' })

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
          <div className="bg-neutral-400 px-2 py-5 md:bg-transparent md:py-10">
            <Tabs.Content tabKey="sacola">
              <div className="flex flex-col gap-8 rounded border border-neutral-500 bg-white">
                {Array.from({ length: 3 }).map((_, i) => (
                  <CartProductItem.Root key={i}>
                    <CartProductItem.Info
                      description="L'Oréal Professionnel Expert Absolut Repair Cortex Lipidium - Máscara de Reconstrução"
                      imgSrc="https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/2/loreal-professionnel-expert-absolut-repair-cortex-lipidium-mascara-de-reconstrucao-500g-24410-963234120108391775.png"
                    />
                    <CartProductItem.Price price={225.9} maxPrice={243.9} />
                  </CartProductItem.Root>
                ))}
              </div>
            </Tabs.Content>
            <Tabs.Content tabKey="pagamento">content 2</Tabs.Content>
            <Tabs.Content tabKey="confirmacao">content 3</Tabs.Content>
          </div>
          <CartInfo.Root>
            <CartInfo.Data
              discount={30}
              subTotal={624.8}
              shippingTotal={5.3}
              quantity={3}
              total={600.1}
            />
            <Button onClick={() => tabs.setTabKey('pagamento')}>Seguir para o pagamento</Button>
          </CartInfo.Root>
        </div>
      </Tabs.Root>
    </>
  )
}
