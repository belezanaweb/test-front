'use client'

import { currencyFormatter } from '@/core'
import { CartModel } from '@/domain'
import { ReactNode, useMemo } from 'react'

type BottomPaymentInformationProps = {
  cartData: CartModel,
  children: ReactNode
}

export default function BottomPaymentInformation({
  cartData,
  children
}: BottomPaymentInformationProps) {
  const quantity = useMemo(
    () => cartData?.items?.reduce((acc, curr) => acc + curr.quantity, 0),
    [cartData?.items]
  )

  return (
    <div className="h-fit gap-6 border-transparent bg-white px-5 py-7 md:rounded">
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

      {children}
    </div>
  )
}
