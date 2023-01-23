import { fireEvent, render, screen } from '@testing-library/react'

import * as ReactRouter from "react-router-dom"
import * as BasketHooks from '../../services/basket/hooks';

import { Basket as BasketType } from '../../services/basket/types';
import Basket from '.'
import { describe } from 'vitest';
import { renderWithTheme } from '../../utils/helpers';

let mockNavigateClick = vi.fn();
vi.mock('react-router-dom', async () => {
    const actual = await vi.importActual("react-router-dom") as HTMLAnchorElement
    return {
        ...actual,
        useNavigate: () => mockNavigateClick
    }
});
describe('Basket page component', () => {

    it('should render component loading', () => { 
        vi.spyOn(BasketHooks, 'useFetchBasket').mockReturnValue(null)
        const { container } =  render(
            renderWithTheme(
                <ReactRouter.BrowserRouter>
                    <Basket />
                </ReactRouter.BrowserRouter>
            )
        ); 
        expect(container.querySelector(".lds-ring")).toBeDefined();
    });

    it('should render component and switch to payment', () => { 
        vi.spyOn(BasketHooks, 'useFetchBasket').mockReturnValue({} as BasketType)
        render(
            renderWithTheme(
                <ReactRouter.BrowserRouter>
                    <Basket />
                </ReactRouter.BrowserRouter>
            )
        ); 
        fireEvent.click(screen.getByText("SEGUIR PARA O PAGAMENTO"))
        expect(mockNavigateClick).toHaveBeenCalled();
    });

})
