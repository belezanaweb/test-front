import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react'
import Theme from '../../theme';

import * as ReactRouter from "react-router-dom";

import SuccessMessage from '.'

describe('Success message component', () => {

    it('should render component', () => {
       const { getByText } = render(
            <ThemeProvider theme={Theme}>
                <ReactRouter.BrowserRouter>
                    <SuccessMessage />
                </ReactRouter.BrowserRouter>
            </ThemeProvider>
        ); 
        expect(getByText("COMPRA EFETUADA COM SUCESSO")).toBeDefined()
    });

})
