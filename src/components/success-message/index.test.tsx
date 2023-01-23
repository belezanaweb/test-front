import { render } from '@testing-library/react'
import * as ReactRouter from "react-router-dom";

import SuccessMessage from '.'
import { renderWithTheme } from '../../utils/helpers';

describe('Success message component', () => {

    it('should render component', () => {
       const { getByText } = render(
            renderWithTheme(
                <ReactRouter.BrowserRouter>
                    <SuccessMessage />
                </ReactRouter.BrowserRouter>
            )
        ); 
        expect(getByText("COMPRA EFETUADA COM SUCESSO")).toBeDefined()
    });

})
