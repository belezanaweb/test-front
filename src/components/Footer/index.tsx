import React from 'react'

import { ICart, TABS } from '@/types'
import { formatCurrency } from '@/utils/formatCurrency'

import { Button } from '../ui/button'

interface FooterProps {
  data: ICart | null
  buttonTitle: TABS
}

const buttonTitles: Record<TABS, string> = {
  bag: 'Seguir para o pagamento',
  payment: 'Finalizar pedido',
  confirmation: 'Voltar ao inicio do protótipo',
}

const DetailRow: React.FC<{ label: string; value?: number }> = ({
  label,
  value,
}) => (
  <div className="text-sm flex justify-between">
    <span>{label}:</span>
    <span>{formatCurrency(value)}</span>
  </div>
)

export const Footer: React.FC<FooterProps> = ({ data, buttonTitle }) => {
  const currentButtonTitle = buttonTitles[buttonTitle]
  const { items, subTotal, shippingTotal, discount, total } = data || {}

  return (
    <div className="bg-white px-5 py-7 fixed bottom-0 left-0 w-full gap-6 flex flex-col">
      <div className="space-y-2">
        <DetailRow
          label={`Produtos (${items?.length} itens)`}
          value={subTotal}
        />
        <DetailRow label="Frete" value={shippingTotal} />
        <div className="flex justify-between">
          <span className="text-sm ">Desconto:</span>
          <span className="font-bold text-purple">
            {formatCurrency(discount)}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="font-bold text-base">Subtotal:</span>
          <span className="font-bold text-base">{formatCurrency(total)}</span>
        </div>
      </div>
      <Button
        className={`w-full rounded text-lg font-bold text-white ${
          buttonTitle === 'confirmation' ? 'bg-black' : 'bg-purple'
        }`}
      >
        {currentButtonTitle}
      </Button>
    </div>
  )
}
