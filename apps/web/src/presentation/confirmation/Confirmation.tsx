import { Card } from '@test-front/common-ui'
import { CartItemsContainer, CartItemsContainerProps } from '../products_list/components'

export function Confirmation({ items }: CartItemsContainerProps) {
  const lastFourCardNumbers = '1234'

  return (
    <div className="flex flex-col gap-5">
      <Card>
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-[1.375rem]">Compra efetuada com sucesso</h1>
          <p className="text-neutral-800">****.****.****.{lastFourCardNumbers}</p>
          <p className="text-neutral-800">{''}</p>
          <p className="text-neutral-800">{''}</p>
        </div>
      </Card>

      <CartItemsContainer items={items} showPrice={false} showTitle />
    </div>
  )
}
