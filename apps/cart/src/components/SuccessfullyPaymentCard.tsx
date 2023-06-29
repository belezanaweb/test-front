import { obfuscateCreditCardNumber } from '../helpers/obfuscateCreditCardNumber';

export function SuccessfullyPaymentCard() {
  return (
    <div className="flex flex-col bg-white rounded-lg border border-stone-300 w-full gap-2 pt-4 pb-6 px-6 items-center">
      <h1 className="text-black text-[1.375rem] font-normal leading-7">
        Compra efetuada com sucesso
      </h1>
      <p className="text-neutral-600 text-base">
        {obfuscateCreditCardNumber('4444333322221111')}
      </p>
      <p className="text-neutral-600 text-base">Bruce Wayne</p>
      <p className="text-neutral-600 text-base">02/2027</p>
    </div>
  );
}
