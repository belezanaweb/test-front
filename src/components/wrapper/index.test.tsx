import { render } from '@testing-library/react'
import Wrapper from '.'
describe('Wrapper component', () => {

    it('should render component', () => {
       const { getByTestId } = render(
                    <Wrapper><div data-testid="div"></div></Wrapper>
        ); 
        expect(getByTestId("div")).toBeDefined()
    });

})
