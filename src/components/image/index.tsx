import React from 'react';
import styled from 'styled-components';

interface ImageProps {
    imageObjects: imageObjects[],
    sizeImage: string
}
interface ImgProps {
    src: string,
    sizeImage: string
}

interface imageObjects {
    thumbnail: string,
    small: string
}

const Image: React.FC<ImageProps> = ({imageObjects, sizeImage = "small"}) => 
    <Img src={imageObjects?.[0]?.[sizeImage as keyof imageObjects]} sizeImage={sizeImage} />;

const Img = styled.img<ImgProps>`
    margin: 0 10px 0 0;
    ${props => (props.sizeImage === "thumbnail" ? `width: 42px;` : `width: 65px;`)};
`
export default Image;