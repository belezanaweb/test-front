/* eslint-disable no-nested-ternary */

import { ReactNode } from 'react';

import { tv } from 'tailwind-variants';

import { formatCurrency } from '../helpers/formatCurrency';

const styles = tv({
  slots: {
    labelStyles: 'text-black text-sm font-normal leading-none tracking-wide',
    amountStyles: 'text-black text-sm font-normal leading-none tracking-wide',
  },
  variants: {
    type: {
      isDiscount: {
        amountStyles: 'text-purple-600 font-bold',
      },
      isTotal: {
        amountStyles: 'font-bold',
        labelStyles: 'font-bold',
      },
    },
  },
});

type RowProps = {
  label: string;
  amount: number;
  isDiscount?: boolean;
  isTotal?: boolean;
};

function Row({ label, amount, isDiscount = false, isTotal = false }: RowProps) {
  const { labelStyles, amountStyles } = styles({
    type: isDiscount ? 'isDiscount' : isTotal ? 'isTotal' : undefined,
  });

  return (
    <div className="flex justify-between items-start gap-4">
      <p className={labelStyles()}>{label}</p>
      <p className={amountStyles()}>{formatCurrency(amount)}</p>
    </div>
  );
}

export type CartInformationProps = {
  subtotal: number;
  productsCount: number;
  shipping: number;
  discount: number;
  total: number;
  children: ReactNode;
};

export function CartInformation({
  subtotal,
  productsCount,
  shipping,
  discount,
  total,
  children,
}: CartInformationProps) {
  return (
    <div className="px-5 py-7 bg-white flex-col flex">
      <div className="flex flex-col gap-6 lg:max-w-4xl lg:m-auto lg:w-full">
        <div className="gap-2 flex flex-col">
          <Row label={`Produtos: (${productsCount} itens)`} amount={subtotal} />
          <Row label="Frete:" amount={shipping} />
          <Row label="Desconto:" amount={discount} isDiscount />
          <Row label="Subtotal:" amount={total} isTotal />
        </div>

        {children}
      </div>
    </div>
  );
}
