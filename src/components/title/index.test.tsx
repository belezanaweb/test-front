import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react'
import Theme from '../../theme';

import * as ReactRouter from "react-router-dom";

import Title from '.'
describe('Title component', () => {

    it('should render component', () => {
       const { getByText } = render(
            <ThemeProvider theme={Theme}>
                <ReactRouter.BrowserRouter>
                    <Title>Teste</Title>
                </ReactRouter.BrowserRouter>
            </ThemeProvider>
        ); 
        expect(getByText("Teste")).toBeDefined()
    });

})
