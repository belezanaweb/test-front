import React from "react";
import { shallow } from "enzyme";
import ConfirmationPage from "./index.js";

const mocky = {
    "number": "1234.1234.1234.1234",
    "name": "Ada Lovelace",
    "date": "12/2027"
}
const cardNumber = mocky.number
const userName = mocky.name
const expirationDate = mocky.date

//const renderedPage = shallow(< ConfirmationPage />)

describe('ConfirmationPage', () => {
    it('o confirmation page está sendo corretamente renderizado', () => {                     
        //expect(renderedPage.exists()).toBeTruthy();
        //expect(renderedPage).toMatchSnapshot();

        //PRECISA FAZER O MOCK DO CARTÃO DE CRÉDITO
    });
  

})