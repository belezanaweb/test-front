import { render } from '@testing-library/react'

import Loading from '.'

describe('Loading component', () => {
    it('should render a loading', () => {
        const { container } = render(
            <Loading  />
        );                        
        expect(container.querySelector(".lds-ring")).toBeInTheDocument()
    });
})