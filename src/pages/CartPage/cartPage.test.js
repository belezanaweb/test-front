import React from "react";
import { shallow } from "enzyme";
import CartPage from "./index.js";

const renderedPage = shallow(<CartPage/>)

describe('CartPage', () => {
    test('o Cart page está sendo corretamente renderizado', () => {                     
        expect(renderedPage.exists()).toBeTruthy();
    });
    test('o Products container renderizado corretamente', () => {
        expect(renderedPage.find("ProductsContainer")).toBeTruthy();
    });
    test('O Botão de confirmação está renderizando e clicando', () => {
        expect(renderedPage.find("ButtonConfirmation")).toBeTruthy();
    });
    test('o botão de confirmação está recebendo click', () => {
        expect(renderedPage.find("ButtonConfirmation"));
    });

})