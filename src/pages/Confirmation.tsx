import React from 'react'

import { Products } from '@/components/Products'
import { ICart } from '@/types'

interface ConfirmationProps {
  data: ICart | null
}

export const Confirmation: React.FC<ConfirmationProps> = ({ data }) => {
  return (
    <div className="bg-light-gray h-full w-full p-4">
      <Products items={data?.items} />
    </div>
  )
}
