import clsx from 'clsx';
import './price-item.css';

export const PriceItem = ({ title, price, isDiscount }: { title: string, price: string, isDiscount?: boolean }) => {
  return (
    <div className="row">
      <span>{title}</span>
      <span className={clsx({ discount: isDiscount })}>{`R$ ${price}`}</span>
    </div>
  );
};
