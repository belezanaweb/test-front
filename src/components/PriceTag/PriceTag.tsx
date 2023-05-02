import MonetaryValue from '../MonetaryValue'

export default function PriceTag({
  priceSpecification
}: {
  priceSpecification: PriceSpecification
}) {
  const hasDiscount = priceSpecification.discount > 0
  return (
    <>
      {hasDiscount && (
        <MonetaryValue
          isDiscount={hasDiscount}
          value={priceSpecification.maxPrice}
          className="text-neutral-400"
        />
      )}
      <MonetaryValue className="font-bold" value={priceSpecification.price} />
    </>
  )
}
