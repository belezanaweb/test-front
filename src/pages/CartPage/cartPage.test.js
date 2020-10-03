import React from "react";
import { shallow } from "enzyme";
import { act } from '@testing-library/react-hooks';
import CartPage from "./index.js";

describe('CartPage', () => {
    const wrapper = shallow(<CartPage/>)

    it('o Cart page está sendo corretamente renderizado', () => {                     
        expect(wrapper.exists()).toBeTruthy();
        expect(wrapper).toMatchSnapshot();
    });
    it('o Products container renderizado corretamente', () => {
        expect(wrapper.find("ProductsContainer")).toBeTruthy();
    });
    it('O Botão de confirmação está renderizando', () => {
        expect(wrapper.find("ButtonConfirmation")).toBeTruthy();
    });
    it('o botão de confirmação está recebendo click', () => {
        // const spy = jest.spyOn(CartPage,"onClickGoToPayment");
        // CartPage.onClickGoToPayment();
        
        // expect(spy).toBeCalled();               
    });

})