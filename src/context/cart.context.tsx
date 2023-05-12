import React, { createContext, useContext, useState } from "react";
import { ICartViewModel } from "../types/cart.types";

type CartContextProps = {
    cart: ICartViewModel;
    setCart: React.Dispatch<React.SetStateAction<ICartViewModel>>;
};

const CartContext = createContext<CartContextProps>({
    cart: {
        items: [{
            quantity: 0,
            product: {
                sku: "",
                name: "",
                imageObjects: [{
                    thumbnail: "",
                    small: "",
                    valid: false,
                }],
                priceSpecification: {
                    sku: "",
                    price: 0,
                    originalPrice: 0,
                    maxPrice: 0,
                    percent: 0,
                    discount: 0,
                }
            }
        }],
        subTotal: 0,
        shippingTotal: 0,
        discount: 0,
        total: 0,
    },
    setCart: () => { },
});

export const useCart = () => useContext(CartContext);

type CartProviderProps = {
    children: React.ReactNode;
};

export const CartProvider = ({ children }: CartProviderProps) => {
    const [cart, setCart] = useState<ICartViewModel>({
        items: [],
        subTotal: 0,
        shippingTotal: 0,
        discount: 0,
        total: 0,
    });

    return (
        <CartContext.Provider value={{ cart, setCart }}>
            {children}
        </CartContext.Provider>
    );
};
