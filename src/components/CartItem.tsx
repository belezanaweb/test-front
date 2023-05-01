import PriceTag from './PriceTag'
import ProductPicture from './ProductPicture'

export default function CartItem({
  product,
  showPrice = true
}: {
  product: Product,
  showPrice?: boolean
}) {
  return (
    <div className="grid grid-cols-12 gap-3.5 justify-between content-center items-center mb-9 last:mb-0">
      <div className="col-span-2 h-[60px] min-w-[60px]">
        <ProductPicture imageObject={product.imageObjects[0]} alt={product.name} />
      </div>
      <div className="col-span-7 overflow-hidden max-h-[50px] pl-4">
        <p className="text-xs leading-4 text-clip ">{product.name}</p>
      </div>
      {showPrice && (
        <div className="col-span-3 flex flex-col">
          <PriceTag priceSpecification={product.priceSpecification} />
        </div>
      )}
    </div>
  )
}
