import React, { useReducer } from 'react';

import CardContext from '../contexts/CardContext';
import { initialStateCard, cardReducer } from '../reducers/card';

const CardProvider = (props) => {
    const [stateCard, dispatchCard] = useReducer(cardReducer, initialStateCard);
    return (
        <CardContext.Provider value={{ card: stateCard, dispatch: dispatchCard }}>
            {props.children}
        </CardContext.Provider>
    );
}
export default CardProvider;