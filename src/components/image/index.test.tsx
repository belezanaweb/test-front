import { render } from '@testing-library/react'

import Image from '.'

describe('Image component', () => {

    beforeEach(() =>{
        render(<Image imageObjects={[{
            thumbnail: "image1",
            small: "image2"
        }]} sizeImage="thumbnail" />)
    })
    it('should render a image', () => {
        const { container } = render(
            <Image imageObjects={[{
                thumbnail: "image1",
                small: "image2"
            }]} />
        );                        
        expect(container.querySelector("img")).toBeInTheDocument()
    });

    it('should render a image size thumbnail', () => {
        const { container } = render(
            <Image imageObjects={[{
                thumbnail: "image1",
                small: "image2"
            }]} sizeImage="thumbnail" />
        );     
        expect(container.querySelector("img")?.src).toEqual("image1")                  
        expect(container.querySelector("img")).toHaveStyle({
            width: "42px"
          })
    });

    it('should render a image size small', () => {
        const { container } = render(
            <Image imageObjects={[{
                thumbnail: "image1",
                small: "image2"
            }]} sizeImage="small" />
        );     
        expect(container.querySelector("img")?.src).toEqual("image2")                  
        expect(container.querySelector("img")).toHaveStyle({
            width: "65px"
          })
    });
})