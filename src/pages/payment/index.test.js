import { shallow } from 'enzyme'
import React from "react";
import { Payment } from "./index"
import { Provider } from 'react-redux';
import configureMockStore from "redux-mock-store";

const mockStore = configureMockStore();
const store = mockStore({});

describe("Testing Payment Page", () => {
    test("Check rendering of Payment page", () => {
        const mockStateCart = {
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

        const mockGetCart = jest.fn()

        const mockGotoSucces = jest.fn()

        const mockCardInfo = {
            card: "1234.1234.1234.1234",
            name: "natalia",
            expiration: "12/2020",
            cvv: 123
        }

        const renderedComponent = shallow(
            <Provider store={store}>
                <Payment cart={mockStateCart} getCart={mockGetCart} goToSuccess={mockGotoSucces} setCreditCard={mockCardInfo} />
            </Provider>
        )

        const foundPaymentPage = renderedComponent.find(Payment)

        expect(foundPaymentPage.props().cart).toEqual(mockStateCart)
        expect(foundPaymentPage.props().getCart).toEqual(mockGetCart)
        expect(foundPaymentPage.props().goToSuccess).toEqual(mockGotoSucces)
        expect(foundPaymentPage.props().setCreditCard).toEqual(mockCardInfo)
    })
})

