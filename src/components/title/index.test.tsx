import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react'
import Theme from '../../theme';

import * as ReactRouter from "react-router-dom";

import Title from '.'
import { renderWithTheme } from '../../utils/helpers';
describe('Title component', () => {

    it('should render component', () => {
       const { getByText } = render(
            renderWithTheme(
                <ReactRouter.BrowserRouter>
                    <Title>Teste</Title>
                </ReactRouter.BrowserRouter>
            )
        ); 
        expect(getByText("Teste")).toBeDefined()
    });

})
