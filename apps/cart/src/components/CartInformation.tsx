/* eslint-disable no-nested-ternary */
import { tv } from 'tailwind-variants';

import { formatCurrency } from '../helpers/formatCurrency';
import { Button } from './Button';

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

export function CartInformation() {
  return (
    <div className="px-5 py-7 bg-white flex-col gap-6 flex">
      <div className="gap-2 flex flex-col">
        <Row label="Produtos: (3 itens)" amount={624.8} />
        <Row label="Frete:" amount={5.3} />
        <Row label="Desconto:" amount={30} isDiscount />
        <Row label="Subtotal:" amount={600.1} isTotal />
      </div>

      <Button>Seguir para o pagamento</Button>
    </div>
  );
}
