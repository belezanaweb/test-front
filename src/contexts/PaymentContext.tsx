import React, { createContext, Dispatch, useState } from "react"
import { Payment } from "../interfaces/Payment.interface"

interface PaymentData {
    payment: Payment | undefined;
    setPayment: Dispatch<React.SetStateAction<Payment | undefined>>;
}

interface PaymentContextProvider {
    children: React.ReactNode;
}

export const PaymentContext = createContext({ payment: {} as Payment } as PaymentData);

export const PaymentContextProvider = ({ children }: PaymentContextProvider) => {
    const [payment, setPayment] = useState<Payment>();

    return (
        <PaymentContext.Provider value={{ payment, setPayment }}>
            {children}
        </PaymentContext.Provider>
    );
}