import React from 'react'

import { useDataContext } from '@/context/dataContext'
import { IImageObjects, IItems, IPriceSpecification } from '@/types'
import { formatCurrency } from '@/utils/formatCurrency'

import { SkeletonProduct } from '../Skeleton'

interface ProductsProps {
  items: IItems[] | undefined
}

export const Products: React.FC<ProductsProps> = ({ items }) => {
  const { tabActive } = useDataContext()
  const hasConfirmationTab = tabActive === 'confirmation'

  return (
    <div className="h-auto bg-white rounded border border-[#CCC] px-2 py-6">
      {hasConfirmationTab && <h1 className="text-xl mb-5">Produtos</h1>}
      <div className="space-y-12">
        {items ? (
          items?.map((item) => {
            const {
              product: { sku, name, imageObjects, priceSpecification },
              quantity,
            } = item

            const image: IImageObjects['small'] = imageObjects?.[0]?.small
            const price: IPriceSpecification['price'] =
              priceSpecification?.price
            const discount = priceSpecification?.discount

            return (
              <div
                key={sku}
                className={`flex flex-row ${
                  hasConfirmationTab ? 'justify-start' : 'justify-between'
                } items-center gap-[15px]`}
              >
                <div>
                  {quantity > 1 && (
                    <span className="text-[10px] bg-purple/90 text-white rounded-full p-1">
                      {quantity.toString().padStart(2, '0')}
                    </span>
                  )}
                  <img src={image} alt={name} className="w-[60px] h-[60px]" />
                </div>
                <span
                  className={`${
                    !hasConfirmationTab ? 'w-[180px]' : 'w-[250px] lg:w-auto'
                  } text-xs`}
                >
                  {name}
                </span>
                {!hasConfirmationTab && (
                  <div className="flex flex-col font-bold">
                    {discount > 0 && (
                      <span className="text-gray-400 font-normal line-through">
                        {formatCurrency(priceSpecification?.maxPrice)}
                      </span>
                    )}
                    {price && <span>{formatCurrency(price)}</span>}
                  </div>
                )}
              </div>
            )
          })
        ) : (
          <SkeletonProduct />
        )}
      </div>
    </div>
  )
}
