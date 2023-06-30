import { useCartProvider } from '../contexts/CartContext';
import { obfuscateCreditCardNumber } from '../helpers/obfuscateCreditCardNumber';

export function SuccessfullyPaymentCard() {
  const { creditCard } = useCartProvider();

  return (
    <div className="flex flex-col bg-white rounded-lg border border-stone-300 w-full gap-2 pt-4 pb-6 px-6 items-center">
      <h1 className="text-black text-[1.375rem] font-normal leading-7">
        Compra efetuada com sucesso
      </h1>
      <p className="text-neutral-600 text-base">
        {obfuscateCreditCardNumber(creditCard?.number)}
      </p>
      <p className="text-neutral-600 text-base">{creditCard?.holder}</p>
      <p className="text-neutral-600 text-base">{creditCard?.expireDate}</p>
    </div>
  );
}
