import React from "react";
import { shallow } from "enzyme";
import { render, fireEvent, getByText } from "@testing-library/react"
import CartPage from "./index.js";

describe('CartPage', () => {
    const wrapper = shallow(<CartPage/>)

    it('cart page is rendering correctly', () => {                     
        expect(wrapper.exists()).toBeTruthy();
        expect(wrapper).toMatchSnapshot();
    });
    it('the product container is rendering correctly', () => {
        expect(wrapper.find("ProductsContainer")).toBeTruthy();
    });
    it('the confirmation button is rendering correctly', () => {
        expect(wrapper.find("ButtonConfirmation")).toBeTruthy();
    });
})