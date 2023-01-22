import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react'
import Theme from '../../theme';

import * as ReactRouter from "react-router-dom"
import * as CreditCardHooks from '../../services/payment/hooks';

import PaymentUserInfo from '.'

const mockCreditCardData =   {
    number: "2222.2222.2222.2222",
    name: "Jose da Silva",
    date: "022024"
}
describe('Payment user info component', () => {

    it('should render component', () => {
        vi.spyOn(CreditCardHooks, 'useCreditCard').mockImplementation(() => {
            return {
                creditCard: mockCreditCardData
            }
        });
       const { getByTestId, debug } = render(
            <ThemeProvider theme={Theme}>
                <ReactRouter.BrowserRouter>
                    <PaymentUserInfo />
                </ReactRouter.BrowserRouter>
            </ThemeProvider>
        ); 
        expect(getByTestId("PaymentUserInfo-info-user").innerHTML).toEqual("****.****.****.2222 <br>JOSE DA SILVA<br>022024");

    });

})
