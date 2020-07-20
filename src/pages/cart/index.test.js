import { shallow } from 'enzyme'
import React from "react";
import { Cart } from "./index"
import CardProduct from "../../components/cardProduct"
import { Provider } from 'react-redux';
import configureMockStore from "redux-mock-store";

const mockStore = configureMockStore();
const store = mockStore({});

describe("Testing Cart Page", () => {
    test("Check rendering of cart page", () => {
        const mockGetCart = jest.fn()
        const mockGoPayment = jest.fn()
        const mockState = {
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

        const renderedComponent = shallow(
            <Provider store={store}>
                <Cart getCart={mockGetCart} gotoPayment={mockGoPayment} cart={mockState} />
            </Provider>
        )

        const foundCartPage = renderedComponent.find(Cart)

        expect(foundCartPage.props().getCart).toEqual(mockGetCart)
        expect(foundCartPage.props().gotoPayment).toEqual(mockGoPayment)
        expect(foundCartPage.props().cart).toEqual(mockState)
    })

    test("Rendering of CardProduct component", () => {
        const mockCart = {
            id: "5b15c171e4b0023bb624f616",
            items: [{
                quantity: 1,
                product: {
                    sku: "24410",
                    name: "L'Oréal Professionnel",
                    imageObjects: [{
                        small: "image-link",
                        medium: "image-link"
                    }],
                    priceSpecification: {
                        price: 225.9
                    }
                }
            }],
            subTotal: 624.8,
            shippingTotal: 5.3,
            discount: 30,
            total: 618.9
        }

        const renderedComponent = shallow(<CardProduct cart={mockCart.items[0]} key={mockCart.items[0].product.sku} />)

        renderedComponent.find(CardProduct)
    });

    test("Go to Payment Page", () => {
        const mockGetCart = jest.fn()
        const mockGoPayment = jest.fn()

        const mockState = {
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

        const renderedComponent = shallow(<Cart getCart={mockGetCart} gotoPayment={mockGoPayment} cart={mockState} />)

        renderedComponent.find("#go-to-payment").simulate("click")
        expect(mockGoPayment).toHaveBeenCalled()
    })
})


