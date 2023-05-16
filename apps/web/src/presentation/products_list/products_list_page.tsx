'use client'
import { useGetCartDataUseCase } from '@/core'
import { GetCartDataUseCase } from '@/domain'
import { TabsPrimitiveComp } from './components/main_tabs'

export type ProductsListPageProps = {
  useCase: GetCartDataUseCase
}

export default function ProductsListPage({ useCase }: ProductsListPageProps) {
  const cartData = useGetCartDataUseCase(useCase)

  return (
    <div className="bg-gray-100">
      {cartData?.items?.length && <TabsPrimitiveComp cartData={cartData} />}
    </div>
  )
}
