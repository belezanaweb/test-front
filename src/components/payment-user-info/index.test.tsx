import { render } from '@testing-library/react'
import * as ReactRouter from "react-router-dom"
import * as CreditCardHooks from '../../services/payment/hooks';

import PaymentUserInfo from '.'
import { mockCreditCardData } from './mock';
import { renderWithTheme } from '../../utils/helpers';


describe('Payment user info component', () => {

    it('should render component', () => {
        vi.spyOn(CreditCardHooks, 'useCreditCard').mockImplementation(() => {
            return {
                creditCard: mockCreditCardData
            }
        });
       const { getByTestId, debug } = render(
            renderWithTheme(
                <ReactRouter.BrowserRouter>
                    <PaymentUserInfo />
                </ReactRouter.BrowserRouter>
            )
        ); 
        expect(getByTestId("PaymentUserInfo-info-user").innerHTML).toEqual("****.****.****.2222 <br>JOSE DA SILVA<br>022024");

    });

})
