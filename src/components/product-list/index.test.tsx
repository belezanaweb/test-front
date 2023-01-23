import { render } from '@testing-library/react'
import * as ReactRouter from "react-router-dom"
import * as BasketHooks from '../../services/basket/hooks';

import ProductList from '.'
import { describe } from 'vitest';

import { mockBasketData } from './mock';
import { renderWithTheme } from '../../utils/helpers';
describe('ProductList component', () => {

    it('should render component with price', () => {
        vi.spyOn(BasketHooks, 'useBasket').mockImplementation(() => {
            return {
                basket: mockBasketData
            }
        });
       const { getByText } = render(
            renderWithTheme(
                <ReactRouter.BrowserRouter>
                    <ProductList />
                </ReactRouter.BrowserRouter>
            )
        ); 
        expect(getByText("R$ 225.90")).toBeDefined()
    });

})
