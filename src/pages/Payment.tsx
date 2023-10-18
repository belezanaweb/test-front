import React from 'react'

import { ScrollArea } from '@radix-ui/react-scroll-area'

import { PaymentForm } from '@/components/Payment'

export const Payment = () => {
  return (
    <ScrollArea className="h-full p-4 bg-light-gray pb-72 lg:pt-11">
      <div className="w-full">
        <PaymentForm />
      </div>
    </ScrollArea>
  )
}
