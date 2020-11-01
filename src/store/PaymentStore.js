import React, { useState, createContext } from 'react'

export const PaymentContext = createContext()
PaymentContext.displayName = 'PaymentContext'

export const PaymentStore = (props) => {
  const [ccNumber, setCcNumber] = useState()
  const [ccName, setCcName] = useState()
  const [ccExpiry, setCcExpiry] = useState()

  function maskCcNumber(cc) {
    const maskedCc = '****.****.****.' + cc.slice(-4)
    return setCcNumber(maskedCc)
  }

  return (
    <PaymentContext.Provider
      value={{
        state: {
          ccNumber,
          ccName,
          ccExpiry
        },
        dispatch: {
          ccNumber: maskCcNumber,
          ccName: setCcName,
          ccExpiry: setCcExpiry
        }
      }}
      {...props}
    />
  )
}
