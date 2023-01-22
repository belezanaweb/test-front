import { ThemeProvider } from 'styled-components';
import { fireEvent, render, screen } from '@testing-library/react'
import Theme from '../../theme';

import * as ReactRouter from "react-router-dom"
import * as BasketHooks from '../../services/basket/hooks';

import { Basket as BasketType } from '../../services/basket/types';
import Basket from '.'
import { describe } from 'vitest';

let mockNavigateClick = vi.fn();
vi.mock('react-router-dom', async () => {
    const actual = await vi.importActual("react-router-dom") as HTMLAnchorElement
    return {
        ...actual,
        useNavigate: () => mockNavigateClick
    }
});
describe('Basket page component', () => {

    it('should render component and switch to payment', () => { 
        vi.spyOn(BasketHooks, 'useFetchBasket').mockReturnValue({} as BasketType)
        render(
            <ThemeProvider theme={Theme}>
                <ReactRouter.BrowserRouter>
                    <Basket />
                </ReactRouter.BrowserRouter>
            </ThemeProvider>
        ); 
        fireEvent.click(screen.getByText("SEGUIR PARA O PAGAMENTO"))
        expect(mockNavigateClick).toHaveBeenCalled();
    });

})
