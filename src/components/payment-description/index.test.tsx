import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react'
import Theme from '../../theme';

import * as ReactRouter from "react-router-dom"
import * as BasketHooks from '../../services/basket/hooks';

import PaymentDescription from '.'
import { describe } from 'vitest';

const mockBasketData =   {
    "items": [{
            "quantity": 1,
            "product": {
                "sku": "24410",
                "name": "L'Oréal Professionnel Expert Absolut Repair Cortex Lipidium - Máscara de Reconstrução 500g",
                "priceSpecification": {
                "sku": "24410",
                "price": 225.9,
                "originalPrice": 225.9,
                "maxPrice": 243.9,
                "percent": 7,
                "discount": 18
            }
        }},
        {
            "quantity": 1,
            "product": {
                "sku": "38273",
                "name": "Good Girl Carolina Herrera Eau de Parfum - Perfume Feminino 30ml",
                "priceSpecification": {
                    "sku": "38273",
                    "price": 299,
                    "originalPrice": 299,
                    "maxPrice": 299,
                    "percent": 0,
                    "discount": 0
                }
            }   
    }],
    "subTotal": 624.8,
    "shippingTotal": 5.3,
    "discount": 30,
    "total": 618.9
}
describe('PaymentDescription component', () => {

    it('should render component', () => {
        vi.spyOn(BasketHooks, 'useBasket').mockImplementation(() => {
            return {
                basket: mockBasketData
            }
        });
       const { getByTestId } = render(
            <ThemeProvider theme={Theme}>
                <ReactRouter.BrowserRouter>
                    <PaymentDescription />
                </ReactRouter.BrowserRouter>
            </ThemeProvider>
        ); 
        expect(getByTestId("total").innerText).toEqual("R$ 524.90");
        expect(getByTestId("frete").innerText).toEqual("R$ 5.30");
        expect(getByTestId("discount").innerText).toEqual("- R$ 30.00");
        expect(getByTestId("totalWithDiscount").innerText).toEqual("R$ 500.20");
    });

})
