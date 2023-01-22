import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react'
import Theme from '../../theme';

import * as ReactRouter from "react-router-dom"
import * as BasketHooks from '../../services/basket/hooks';

import ProductList from '.'
import { describe } from 'vitest';

import { mockBasketData } from './mock';
describe('ProductList component', () => {

    it('should render component with price', () => {
        vi.spyOn(BasketHooks, 'useBasket').mockImplementation(() => {
            return {
                basket: mockBasketData
            }
        });
       const { getByText } = render(
            <ThemeProvider theme={Theme}>
                <ReactRouter.BrowserRouter>
                    <ProductList />
                </ReactRouter.BrowserRouter>
            </ThemeProvider>
        ); 
        expect(getByText("R$ 225.90")).toBeDefined()
    });

})
