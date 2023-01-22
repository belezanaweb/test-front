import { ThemeProvider } from 'styled-components';
import { fireEvent, render, screen } from '@testing-library/react'
import Theme from '../../theme';

import * as ReactRouter from "react-router-dom"
import * as BasketHooks from '../../services/basket/hooks';
import * as CreditCardHooks from '../../services/payment/hooks';

import Header from '.'
import { describe } from 'vitest';

let mockNavigateClick = vi.fn();
vi.mock('react-router-dom', async () => {
    const actual = await vi.importActual("react-router-dom") as HTMLAnchorElement
    return {
        ...actual,
        useNavigate: () => mockNavigateClick
    }
});
describe('Header component', () => {

    it('should render component', () => {
        render(
            <ThemeProvider theme={Theme}>
                <ReactRouter.BrowserRouter>
                    <Header itemSelected={0} />
                </ReactRouter.BrowserRouter>
            </ThemeProvider>
        );
        expect(screen.getByText("SACOLA")).toBeDefined();
        expect(screen.getByText("PAGAMENTO")).toBeDefined();
        expect(screen.getByText("CONFIRMAÇÃO")).toBeDefined()
    });
    it('shouldn`t switch to payment when basket data empty ', () => { 
        vi.spyOn(BasketHooks, 'useBasket').mockImplementation(() => {
            return {
                basket: null
            }
        });
        render(
            <ThemeProvider theme={Theme}>
                <ReactRouter.BrowserRouter>
                    <Header itemSelected={0} />
                </ReactRouter.BrowserRouter>
            </ThemeProvider>
        ); 
        fireEvent.click(screen.getByText("PAGAMENTO"))
        expect(mockNavigateClick).not.toHaveBeenCalled();
    });

    it('shouldn`t switch to confirmation route when credit card data empty ', () => {

        vi.spyOn(CreditCardHooks, 'useCreditCard').mockImplementation(() => {
            return {
                creditCard: {
                    number: null
                }
            }
        });
        render(
            <ThemeProvider theme={Theme}>
                <ReactRouter.BrowserRouter>
                    <Header itemSelected={0} />
                </ReactRouter.BrowserRouter>
            </ThemeProvider>
        );
        fireEvent.click(screen.getByText("CONFIRMAÇÃO"))
        expect(mockNavigateClick).not.toHaveBeenCalled();
    });

    it('should switch to payment route when have basket data ', () => {
        vi.mock('react-router-dom', async () => {
            const actual = await vi.importActual("react-router-dom") as HTMLAnchorElement
            return {
                ...actual,
                useNavigate: () => mockNavigateClick
            }
        });
        vi.spyOn(BasketHooks, 'useBasket').mockImplementation(() => {
            return {
                basket: {
                    slug: "123"
                }
            }
        });
        render(
            <ThemeProvider theme={Theme}>
                <ReactRouter.BrowserRouter>
                    <Header itemSelected={0} />
                </ReactRouter.BrowserRouter>
            </ThemeProvider>
        ); 
        fireEvent.click(screen.getByText("PAGAMENTO"))
        expect(mockNavigateClick).toHaveBeenCalledWith("/payment");
    });
   
    it('should switch to confirmation route when have credit card data ', () => {
        vi.spyOn(CreditCardHooks, 'useCreditCard').mockImplementation(() => {
            return {
                creditCard: {
                    number: "1111.1111.1111.1111"
                }
            }
        });
        render(
            <ThemeProvider theme={Theme}>
                <ReactRouter.BrowserRouter>
                    <Header itemSelected={0} />
                </ReactRouter.BrowserRouter>
            </ThemeProvider>
        );
        fireEvent.click(screen.getByText("CONFIRMAÇÃO"))
        expect(mockNavigateClick).toHaveBeenCalledWith("/confirmation");
    });
})
