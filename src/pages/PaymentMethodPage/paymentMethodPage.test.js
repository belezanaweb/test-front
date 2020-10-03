import React from "react";
import { shallow } from "enzyme";
import { render, fireEvent, getByText } from "@testing-library/react"
import PaymentMethodPage from "./index.js";

describe('PaymentMethodPage', () => {
    const wrapper = shallow(<PaymentMethodPage/>)
    
    it('Payment method page is rendering correctly', () => {                     
        expect(wrapper.exists()).toBeTruthy();
        expect(wrapper).toMatchSnapshot();
    });
    it('Confirmation Button is renderingo', () => {        
        expect(wrapper.find("ButtonConfirmation")).toBeTruthy();
    });
    it('cardNumber input is rendering', () => {
        const { container, getByTestId } = render(<PaymentMethodPage/>);
        const input = getByTestId('cardNumber');
        fireEvent.change(input, {targuet: {value: '1234123412341234'}});
        expect(input).toBeTruthy();
    });
    it('name input is rendering', () => {
        const { container, getByTestId } = render(<PaymentMethodPage/>);
        const input = getByTestId('name');
        fireEvent.change(input, {targuet: {value: 'Ada Lovelace'}});
        expect(input).toBeTruthy();
    });
    it('expirationDate input is rendering', () => {
        const { container, getByTestId } = render(<PaymentMethodPage/>);
        const input = getByTestId('expirationDate');
        fireEvent.change(input, {targuet: {value: '12/2020'}});
        expect(input).toBeTruthy();
    });
    it('cvv input is rendering', () => {
        const { container, getByTestId } = render(<PaymentMethodPage/>);
        const input = getByTestId('cvv');
        fireEvent.change(input, {targuet: {value: '123'}});
        expect(input).toBeTruthy();
    });
})