import React from 'react'

import { Products } from '@/components/Products'
import { ICart } from '@/types'

interface BagProps {
  data: ICart | null
}

export const Bag: React.FC<BagProps> = ({ data }) => {
  return (
    <div className="bg-light-gray h-full w-full p-4">
      <Products items={data?.items} />
    </div>
  )
}
