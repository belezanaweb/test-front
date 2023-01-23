import { render } from '@testing-library/react'

import * as ReactRouter from "react-router-dom";
import Confirmation from '.'
import { renderWithTheme } from '../../utils/helpers';

describe('Confirmation page component', () => {

    it('should render component', () => { 
        const {container} = render(
            renderWithTheme(
                <ReactRouter.BrowserRouter>
                    <Confirmation />
                </ReactRouter.BrowserRouter>
            )
        ); 
        expect(container).toBeInTheDocument();
    });

})
