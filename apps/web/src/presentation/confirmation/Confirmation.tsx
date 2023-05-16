import { Card } from '@test-front/common-ui'
import { useFormContext } from 'react-hook-form'
import { PaymentFormValues } from '../payment_form'
import { CartItemsContainer, CartItemsContainerProps } from '../products_list/components/cart_item/cart_items_container'

export default function Confirmation({ items }: CartItemsContainerProps) {
  const { getValues } = useFormContext<PaymentFormValues>()
  const lastFourCardNumbers = getValues('cardNumber')?.slice(-4)

  return (
    <div className="flex flex-col gap-5">
      <Card>
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-[1.375rem]">Compra efetuada com sucesso</h1>
          <p className="text-gray-400">****.****.****.{lastFourCardNumbers}</p>
          <p className="text-gray-400">{''}</p>
          <p className="text-gray-400">{''}</p>
        </div>
      </Card>

      <CartItemsContainer items={items} showPrice={false} showTitle />
    </div>
  )
}
