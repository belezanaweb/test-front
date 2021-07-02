import React, { useReducer, useEffect } from "react";
import { useLocalStorage } from "@belezanaweb/hooks";

const UserStateContext = React.createContext();
const UserDispatchContext = React.createContext();

const STORAGE_KEY = "BelezaNaWeb.Front";

const initialState = {
  cartItems: [
    {
      id: null,
      items: [
        {
          quantity: null,
          product: {
            sku: null,
            name: null,
            imageObjecs: [
              {
                featured: null,
                thumbnail: null,
                valid: true,
              },
            ],
            priceSpecification: {
              sku: null,
              price: null,
              originalPrice: null,
              maxPrice: null,
              percent: null,
              discount: null,
            },
          },
        },
      ],
    },
  ],
  purchaseItemsResume: {
    subTotal: null,
    shippingTotal: null,
    discount: null,
    total: null,
  },
  creditCardDetails: {
    number: null,
    name: null,
    expirationDate: null,
  },
};

function UserReducer(state, action) {
  switch (action.type) {
    case "saveCartItems": {
      return {
        ...state,
        cartItems: {
          ...state.cartItems,
          ...action.value,
        },
      };
    }
    case "savePurchaseItemsResume": {
      return {
        ...state,
        purchaseItemsResume: {
          ...state.purchaseItemsResume,
          ...action.value,
        },
      };
    }
    case "saveCreditCardDetails": {
      return {
        ...state,
        creditCardDetails: {
          ...state.creditCardDetails,
          ...action.value,
        },
      };
    }
    default: {
      return state;
    }
  }
}

function UserProvider({ children }) {
  const [storedValue, setValue] = useLocalStorage(STORAGE_KEY, initialState);
  const [state, dispatch] = useReducer(UserReducer, storedValue);

  useEffect(() => {
    setValue(state);
  }, [state]);

  return (
    <UserStateContext.Provider value={state}>
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserStateContext.Provider>
  );
}

function useUserState() {
  const context = React.useContext(UserStateContext);

  if (context === undefined) {
    throw new Error("useUserState must be used within a UserProvider");
  }

  return context;
}

function useUserDispatch() {
  const context = React.useContext(UserDispatchContext);

  if (context === undefined) {
    throw new Error("useUserDispatch must be used within a UserProvider");
  }

  return context;
}

export { UserProvider, useUserState, useUserDispatch };
