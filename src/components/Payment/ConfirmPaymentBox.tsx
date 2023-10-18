import React from 'react'

import { useDataContext } from '@/context/dataContext'
import { maskCardNumber } from '@/utils/mask'

export const ConfirmPaymentBox = () => {
  const { formData } = useDataContext()

  return (
    <div className="flex flex-col gap-2 text-center items-center bg-white rounded border border-[#CCC] px-2 py-6 text-black04">
      <h1 className="text-[22px] text-black">Compra efetuada com sucesso</h1>
      <span>{maskCardNumber(formData?.cardNumber)}</span>
      <span>{formData?.cardHolderName}</span>
      <span>{formData?.expirationDate}</span>
    </div>
  )
}
