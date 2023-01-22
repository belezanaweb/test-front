import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react'
import Theme from '../../theme';
import * as ReactRouter from "react-router-dom"

import ProductCard from '.'

const mockData =   {
    imageObjects:[{
        thumbnail: "thumbnail",
        small: "small"
    }], 
    name: "Jose da Silva", 
    priceSpecification: {
        price: 10
    }, 
    sizeImage: "small", 
    isShowPrice: true
}
describe('Product card component', () => {

    it('should render component', () => {
       const { container } = render(
            <ThemeProvider theme={Theme}>
                <ReactRouter.BrowserRouter>
                    <ProductCard {...mockData}/>
                </ReactRouter.BrowserRouter>
            </ThemeProvider>
        ); 
        expect(container.querySelector("img")?.src).toEqual("small");
        expect(container.querySelector("h2")?.innerHTML).toEqual("Jose da Silva");
        expect(container.querySelector("p")?.innerHTML).toEqual("R$ 10.00");
    });

})
