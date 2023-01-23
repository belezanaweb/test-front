import { render } from '@testing-library/react'
import * as ReactRouter from "react-router-dom";
import Payment from '.'
import { renderWithTheme } from '../../utils/helpers';

describe('Payment page component', () => {

    it('should render component', () => { 
        const {container} = render(
            renderWithTheme(
                <ReactRouter.BrowserRouter>
                    <Payment />
                </ReactRouter.BrowserRouter>
            )
        ); 
        expect(container).toBeInTheDocument();
    });

})
