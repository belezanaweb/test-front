import React from 'react'

import { ScrollArea } from '@radix-ui/react-scroll-area'

import { Products } from '@/components/Products'
import { ICart } from '@/types'

interface BagProps {
  data: ICart | null
}

export const Bag: React.FC<BagProps> = ({ data }) => {
  return (
    <ScrollArea className="h-full p-4 bg-light-gray pb-72">
      <div className="w-full">
        <Products items={data?.items} />
      </div>
    </ScrollArea>
  )
}
