import { moneyFormatter } from '@/utils'
import { ReactNode } from 'react'

// ROOT

export function CartInfoRoot({ children }: { children: ReactNode }) {
  return (
    <div className="h-fit rounded border border-transparent bg-white pb-6 px-5 md:mx-2 md:my-10 md:min-w-[320px] md:border-neutral-500">
      {children}
    </div>
  )
}

// INFO DATA

type CartInfoDataProps = {
  discount: number
  quantity: number
  shippingTotal: number
  subTotal: number
  total: number
}

export function CartInfoData({
  discount,
  quantity,
  shippingTotal,
  subTotal,
  total
}: CartInfoDataProps) {
  return (
    <ul className="mb-7 mt-6 flex flex-col gap-2">
      <li className="flex justify-between text-sm">
        <label>Produtos: ({quantity} itens)</label>
        <span>{moneyFormatter.format(total)}</span>
      </li>
      <li className="flex justify-between text-sm">
        <label>Frete</label>
        <span>{moneyFormatter.format(shippingTotal)}</span>
      </li>
      <li className="flex justify-between text-sm">
        <label>Desconto</label>
        <span className="font-bold text-purple-500">{moneyFormatter.format(discount)}</span>
      </li>
      <li className="flex justify-between">
        <label className="font-bold">Subtotal</label>
        <span className="font-bold">{moneyFormatter.format(subTotal)}</span>
      </li>
    </ul>
  )
}
