import formatCurrency from '../helpers/formatCurrency';

export type ProductProps = {
  image: string;
  description: string;
  price: number;
  discount: number;
  maxPrice: number;
  hiddenPrices?: boolean;
};

export default function Product({
  image,
  description,
  price,
  discount = 0,
  maxPrice,
  hiddenPrices,
}: ProductProps) {
  return (
    <div className="flex justify-between gap-4">
      <div className="h-16 w-16 shrink-0">
        <div>
          <img src={image} alt={description} />
        </div>
      </div>

      <div className="items-center flex flex-1">
        <p className="text-black text-xs">{description}</p>
      </div>

      {!hiddenPrices && (
        <div className="w-16 justify-center flex flex-col">
          {discount > 0 && (
            <p className="text-sm text-neutral-400 line-through">
              {formatCurrency(maxPrice)}
            </p>
          )}
          <span className="text-sm text-black font-bold">
            {formatCurrency(price)}
          </span>
        </div>
      )}
    </div>
  );
}
