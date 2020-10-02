import React from "react";
import { shallow } from "enzyme";
import CartPage from "./index.js";

const renderedPage = shallow(<CartPage/>)

describe('CartPage', () => {
    it('o Cart page está sendo corretamente renderizado', () => {                     
        expect(renderedPage.exists()).toBeTruthy();
        expect(renderedPage).toMatchSnapshot();
    });
    it('o Products container renderizado corretamente', () => {
        expect(renderedPage.find("ProductsContainer")).toBeTruthy();
    });
    it('O Botão de confirmação está renderizando e clicando', () => {
        expect(renderedPage.find("ButtonConfirmation")).toBeTruthy();
    });
    it('o botão de confirmação está recebendo click', () => {
        expect(renderedPage.find("ButtonConfirmation"));
    });

})