import { render } from '@testing-library/react'
import * as ReactRouter from "react-router-dom"
import * as BasketHooks from '../../services/basket/hooks';
import { mockBasketData } from './mock';
import PaymentDescription from '.'
import { describe } from 'vitest';
import { renderWithTheme } from '../../utils/helpers';

describe('PaymentDescription component', () => {

    it('should render component', () => {
        vi.spyOn(BasketHooks, 'useBasket').mockImplementation(() => {
            return {
                basket: mockBasketData
            }
        });
       const { getByTestId } = render(
            renderWithTheme(
                <ReactRouter.BrowserRouter>
                    <PaymentDescription />
                </ReactRouter.BrowserRouter>
            )
        ); 
        expect(getByTestId("total").innerText).toEqual("R$ 524.90");
        expect(getByTestId("frete").innerText).toEqual("R$ 5.30");
        expect(getByTestId("discount").innerText).toEqual("- R$ 30.00");
        expect(getByTestId("totalWithDiscount").innerText).toEqual("R$ 500.20");
    });

})
