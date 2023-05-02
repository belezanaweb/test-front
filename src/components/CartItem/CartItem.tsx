import PriceTag from '../PriceTag'
import ProductPicture from '../ProductPicture'

export default function CartItem({
  product,
  showPrice = true
}: {
  product: Product,
  showPrice?: boolean
}) {
  return (
    <div className="grid grid-cols-12 gap-3.5 md:gap-2 justify-between content-center items-center mb-9 last:mb-6 first:mt-3">
      <div className="col-span-2 h-[60px] md:h-full min-w-[60px] md:min-w-[90px] md:col-span-2">
        <ProductPicture imageObject={product.imageObjects[0]} alt={product.name} />
      </div>
      <div
        className={`${
          showPrice ? 'col-span-7' : 'col-span-10'
        } overflow-hidden max-h-[50px] md:max-h-fit pl-4 md:pl-6 md:mt-7`}
      >
        <p className="text-xs md:text-sm leading-4 text-clip ">{product.name}</p>
      </div>
      {showPrice && (
        <div className="col-span-3 flex flex-col  md:mt-7">
          <PriceTag priceSpecification={product.priceSpecification} />
        </div>
      )}
    </div>
  )
}
