import React from 'react'

import { ConfirmPaymentBox } from '@/components/Payment/ConfirmPaymentBox'
import { Products } from '@/components/Products'
import { ScrollArea } from '@/components/ui/scroll-area'
import { ICart } from '@/types'

interface ConfirmationProps {
  data: ICart | null
}

export const Confirmation: React.FC<ConfirmationProps> = ({ data }) => {
  return (
    <ScrollArea className="h-full p-4 bg-light-gray">
      <div className="w-full space-y-5">
        <ConfirmPaymentBox />
        <Products items={data?.items} />
      </div>
    </ScrollArea>
  )
}
