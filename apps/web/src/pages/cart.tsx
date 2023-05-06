import { Button, Tabs, useTabs } from 'ui'
import { CartInfo } from '@/components'

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

function ProductItem() {
  return (
    <div className="flex items-center gap-3 px-2 py-2 first:pt-6 last:pb-10 md:pr-7">
      <div className="flex flex-1 items-center gap-3">
        <img
          className="h-[60px] w-[60px] object-cover md:h-20 md:w-20"
          alt="product"
          src="https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/2/good-girl-carolina-herrera-eau-de-parfum-perfume-feminino-30ml-38273-1960525940762131267.jpg"
        />
        <p className="max-w-[200px] text-xs md:max-w-[400px]">
          L'Oréal Professionnel Expert Absolut Repair Cortex Lipidium - Máscara de Reconstrução
        </p>
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-sm text-neutral-600 line-through">R$ 243,90</span>
        <span className="text-sm font-bold">R$ 225,90</span>
      </div>
    </div>
  )
}

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
                <ProductItem />
                <ProductItem />
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
            <Button>Seguir para o pagamento</Button>
          </CartInfo.Root>
        </div>
      </Tabs.Root>
    </>
  )
}
