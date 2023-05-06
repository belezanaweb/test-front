import { useFetchCart } from '@/hooks'
import { moneyFormatter } from '@/utils'
import { ReactNode } from 'react'

// ROOT

export function CartInfoRoot({ children }: { children: ReactNode }) {
  return (
    <div className="h-fit rounded border border-transparent bg-white px-5 pb-6 md:mx-2 md:my-10 md:min-w-[320px] md:border-neutral-500">
      {children}
    </div>
  )
}

// INFO DATA

export function CartInfoData() {
  const { data, isLoading } = useFetchCart()

  if (isLoading) {
    return <>Carrengando...</>
  }

  const quantity = data?.items.reduce((acc, curr) => acc + curr.quantity, 0)

  return (
    <ul className="mb-7 mt-6 flex flex-col gap-2">
      <li className="flex justify-between text-sm">
        <label>Produtos: ({quantity} itens)</label>
        <span>{moneyFormatter.format(data!.total)}</span>
      </li>
      <li className="flex justify-between text-sm">
        <label>Frete</label>
        <span>{moneyFormatter.format(data!.shippingTotal)}</span>
      </li>
      <li className="flex justify-between text-sm">
        <label>Desconto</label>
        <span className="font-bold text-purple-500">{moneyFormatter.format(data!.discount)}</span>
      </li>
      <li className="flex justify-between">
        <label className="font-bold">Subtotal</label>
        <span className="font-bold">{moneyFormatter.format(data!.subTotal)}</span>
      </li>
    </ul>
  )
}
