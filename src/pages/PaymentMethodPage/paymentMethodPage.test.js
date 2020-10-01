import React from "react";
import { shallow } from "enzyme";
import PaymentMethodPage from "./index.js";

const renderedPage = shallow(<PaymentMethodPage/>)

describe('PaymentMethodPage', () => {
    test('o payment method page está sendo corretamente renderizado', () => {                     
        expect(renderedPage.exists()).toBeTruthy();
    });
  

})