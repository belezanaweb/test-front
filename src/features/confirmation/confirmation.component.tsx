import { BagProductResponse } from '../../services/bag-products/bag-products.services.types';
import { BagProductList } from '../bag-product-list/bag-product-list.component';

import './confirmation.styles.css';

interface BagProductListProps {
  bag: BagProductResponse;
  cardNumber?: string;
  expiryDate?: string;
  cardHolder?: string
}

const maskCardNumber = (cardNumber: string): string => {

  const digits = cardNumber.replace(/\D/g, '');

  if (digits.length < 4) return '****.****.****.' + digits;

  const last4 = digits.slice(-4);
  return `****.****.****.${last4}`;
};


export const Confirmation: React.FC<BagProductListProps> = ({ bag, cardHolder, cardNumber, expiryDate }: BagProductListProps) => {
  return (
    <>
      <div className="card">
        <div className='payer-info'>
          <h2 className="confirmation_title">Compra efetuada com sucesso</h2>

          <span className='confirmation_description'>{maskCardNumber(String(cardNumber))}</span>
          <span className='confirmation_description'>{cardHolder}</span>
          <span className='confirmation_description'>{expiryDate}</span>
        </div>
      </div>
      <BagProductList bag={bag} hidePrices />
    </>
  );
}
