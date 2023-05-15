import { currencyFormatter } from '@/core'
import { CartResponse } from '@/domain'
import { Button } from '@test-front/common-ui'

type BottomPaymentInformationProps = {
  cartData: CartResponse
}

export default function BottomPaymentInformation({ cartData }: BottomPaymentInformationProps) {
  const quantity = cartData?.items?.reduce((acc, curr) => acc + curr.quantity, 0)

  return (
    <div className="h-fit gap-6 border-transparent px-5 py-7 md:mx-2 md:my-10 md:min-w-[320px] md:border-gray-500">
      <ul className="flex flex-col gap-2">
        <li className="flex justify-between text-sm">
          <label>Produtos: ({quantity} itens)</label>
          <span>{currencyFormatter.format(cartData.total)}</span>
        </li>

        <li className="flex justify-between text-sm">
          <label>Frete</label>
          <span>{currencyFormatter.format(cartData.shippingTotal)}</span>
        </li>

        <li className="flex justify-between text-sm">
          <label>Desconto</label>
          <span className="text-primary-100 font-bold">
            {currencyFormatter.format(cartData.discount)}
          </span>
        </li>

        <li className="flex justify-between">
          <label className="font-bold">Subtotal</label>
          <span className="font-bold">{currencyFormatter.format(cartData.subTotal)}</span>
        </li>
      </ul>

      <Button type="button" className="mt-6">
        Seguir para o pagamento
      </Button>
    </div>
  )
}
