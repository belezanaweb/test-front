import axios from "axios"
import { setCreditCard, setCart, getCart } from "./cart"

describe("Testing Cart Actions", () => {
    test("setCreditCard action", () => {
        const mockCardInfo = {
            card: "1234.1234.1234.1234",
            name: "natalia acedo",
            expiration: "12/2023",
            cvv: "586"
        }

        const action = setCreditCard(mockCardInfo)

        expect(action.type).toBe("SET_CREDIT_CARD")
        expect(action.payload.cardInfo).toBe(mockCardInfo)
    })

    test("setCart action", () => {
        const mockCart = {
            id: "5b15c171e4b0023bb624f616",
            items: [{
                quantity: 1,
                product: {}
            }],
            subTotal: 624.8,
            shippingTotal: 5.3,
            discount: 30,
            total: 618.9
        }

        const action = setCart(mockCart)

        expect(action.type).toBe("SET_CART")
        expect(action.payload.cart).toBe(mockCart)
    })

    test("getCart action", async () => {
        axios.get = jest.fn(async () => ({
            data: {
                id: "5b15c171e4b0023bb624f616",
                items: [{
                    quantity: 1,
                    product: {}
                }],
                subTotal: 624.8,
                shippingTotal: 5.3,
                discount: 30,
                total: 618.9
            }
        }))

        const dispatch = jest.fn()
        await getCart()(dispatch)

        expect(dispatch).toHaveBeenCalledWith({
            type: "SET_CART",
            payload: {
                cart: {
                    id: "5b15c171e4b0023bb624f616",
                    items: [{
                        quantity: 1,
                        product: {}
                    }],
                    subTotal: 624.8,
                    shippingTotal: 5.3,
                    discount: 30,
                    total: 618.9
                }
            }
        })
    })
})