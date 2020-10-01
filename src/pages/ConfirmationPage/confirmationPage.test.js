import React from "react";
import { shallow } from "enzyme";
import ConfirmationPage from "./index.js";

const renderedPage = shallow(< ConfirmationPage/>)

describe('ConfirmationPage', () => {
    test('o confirmation page está sendo corretamente renderizado', () => {                     
        expect(renderedPage.exists()).toBeTruthy();
    });
  

})