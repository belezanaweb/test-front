import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react'
import Theme from '../../theme';

import * as ReactRouter from "react-router-dom";
import Payment from '.'

describe('Payment page component', () => {

    it('should render component', () => { 
        const {container} = render(
            <ThemeProvider theme={Theme}>
                <ReactRouter.BrowserRouter>
                    <Payment />
                </ReactRouter.BrowserRouter>
            </ThemeProvider>
        ); 
        expect(container).toBeInTheDocument();
    });

})
