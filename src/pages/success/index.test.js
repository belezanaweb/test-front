import { shallow } from 'enzyme'
import React from "react";
import { Success } from "./index"
import { Provider } from 'react-redux';
import configureMockStore from "redux-mock-store";

const mockStore = configureMockStore();
const store = mockStore({});

describe("Testing Success Page", () => {
    test("Check rendering of Success page", () => {

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

        const mockCardInfo = {
            card: "1234.1234.1234.1234",
            name: "natalia",
            expiration: "12/2020",
            cvv: 123
        }

        const mockGoPayment = jest.fn()

        const renderedComponent = shallow(
            <Provider store={store}>
                <Success cardInfo={mockCardInfo} cart={mockStateCart} gotoPayment={mockGoPayment} />
            </Provider>
        )

        const foundSuccesPage = renderedComponent.find(Success)

        expect(foundSuccesPage.props().cardInfo).toEqual(mockCardInfo)
        expect(foundSuccesPage.props().cart).toEqual(mockStateCart)
        expect(foundSuccesPage.props().gotoPayment).toEqual(mockGoPayment)
    })
})


