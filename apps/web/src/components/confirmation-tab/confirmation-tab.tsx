import { useFetchCart } from '@/hooks'
import { Card } from '../card'
import { CartProductItem } from '../cart-product-item'
import { useFormContext } from 'react-hook-form'

export function ConfirmationTab() {
  const { data } = useFetchCart()
  const { getValues } = useFormContext()
  const lastFourCardNumbers = getValues('cardNumber').slice(-4)

  return (
    <div className="flex flex-col gap-5">
      <Card className="flex flex-col items-center gap-2">
        <h1 className="text-[1.375rem]">Compra efetuada com sucesso</h1>
        <p className="text-neutral-800">****.****.****.{lastFourCardNumbers}</p>
        <p className="text-neutral-800">{getValues('name')}</p>
        <p className="text-neutral-800">{getValues('dueDate')}</p>
      </Card>
      <Card>
        <h2 className="text-xl">Produtos</h2>
        {data?.items.map((item, i) => (
          <CartProductItem.Root key={i}>
            <CartProductItem.Info
              description={item.product.name}
              imgSrc={item.product.imageObjects[0].small}
            />
          </CartProductItem.Root>
        ))}
      </Card>
    </div>
  )
}
