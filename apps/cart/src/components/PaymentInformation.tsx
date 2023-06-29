import { ListOfProducts } from './ListOfProducts';
import { SuccessfullyPaymentCard } from './SuccessfullyPaymentCard';

export function PaymentInformation() {
  return (
    <div className="flex flex-col w-full gap-5">
      <SuccessfullyPaymentCard />
      <ListOfProducts />
    </div>
  );
}
