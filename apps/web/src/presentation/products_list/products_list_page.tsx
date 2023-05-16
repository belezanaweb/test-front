'use client'
import { useGetCartDataUseCase } from '@/core'
import { GetCartDataUseCase } from '@/domain'
import { TabNavigation } from './components/main_layout/tab_navigation'

export type ProductsListPageProps = {
  useCase: GetCartDataUseCase
}

export default function ProductsListPage({ useCase }: ProductsListPageProps) {
  const cartData = useGetCartDataUseCase(useCase)

  return (
    <div className="bg-gray-100">
      {cartData?.items?.length && <TabNavigation cartData={cartData} />}
    </div>
  )
}
