import React, { createContext, useState, useEffect } from 'react';

interface BillingContextInterface {
    cardApproved: boolean,
    setcardApproved?: Function | any,
}

export const BillingContext = createContext<BillingContextInterface>({
    cardApproved: false,
})

const BillingContextProvider = (props: any) => {

    const [cardApproved, setcardApproved] = useState(false)

    useEffect(() => { setcardApproved(cardApproved) }, [cardApproved])

    return (
        <BillingContext.Provider value={{ cardApproved, setcardApproved }}>
            {props.children}
        </BillingContext.Provider>
    );
}

export default BillingContextProvider;