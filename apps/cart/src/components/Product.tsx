import { formatCurrency } from "../helpers/formatCurrency";

export type ProductProps = {
  image: string;
  description: string;
  price: number;
  discount?: number;
};

export function Product({ image, description, price, discount }: ProductProps) {
  return (
    <div className="flex justify-between gap-4">
      <div className="h-16 w-16 shrink-0">
        <div>
          <img src={image} alt={description} />
        </div>
      </div>

      <div className="items-center flex">
        <p className="text-black text-xs">{description}</p>
      </div>

      <div className="w-16 justify-center flex flex-col">
        {discount && (
          <p className="text-sm text-neutral-400 line-through">
            {formatCurrency(discount)}
          </p>
        )}
        <span className="text-sm text-black font-bold">
          {formatCurrency(price)}
        </span>
      </div>
    </div>
  );
}
