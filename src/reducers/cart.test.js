import { setCreditCard, setCart } from "../actions/cart"
import carts from "./cart"


describe("Testing cart reducer", () => {
    test("Case action type SET_CART", () => {
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

        const mockStateCart = { cart: null }
        const mockAction = setCart(mockCart)
        const newState = carts(mockStateCart, mockAction)

        expect(newState.cart).toBe(mockCart)
    })

    test("Case action type SET_CREDIT_CARD", () => {
        const mockCardInfo = {
            card: "1234.1234.1234.1234",
            name: "natalia acedo",
            expiration: "12/2023",
            cvv: "586"
        }

        const mockStateCardInfo = { cardInfo: null }
        const mockAction = setCreditCard(mockCardInfo)
        const newState = carts(mockStateCardInfo, mockAction)

        expect(newState.cardInfo).toBe(mockCardInfo)
    })

    test("Invalid Action Type", () => {
        const mockState = { cart: null, cardInfo: null }

        const mockInvalidAction = { type: "TEST_INVALID_ACTION_TYPE" }

        const newState = carts(mockState, mockInvalidAction)

        expect(newState).toBe(mockState)

    })
})