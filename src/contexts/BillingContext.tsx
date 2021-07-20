import React, { createContext, useState, useEffect } from 'react';

interface BillingContextInterface {
    cardData: any,
    setCardData: any,
    cardApproved: boolean,
    setCardApproved?: Function | any,
}

export const BillingContext = createContext<BillingContextInterface>({
    cardData: null,
    setCardData: null,
    cardApproved: false,
})

const BillingContextProvider = (props: any) => {

    const [cardData, setCardData] = useState(null)
    const [cardApproved, setCardApproved] = useState(false)

    useEffect(() => { setCardApproved(cardApproved) }, [cardApproved])

    return (
        <BillingContext.Provider value={{ cardApproved, setCardApproved, cardData, setCardData }}>
            {props.children}
        </BillingContext.Provider>
    );
}

export default BillingContextProvider;