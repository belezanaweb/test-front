import React from 'react';
import * as S from './styles'

interface ImageProps {
    imageObjects: imageObjects[],
    sizeImage?: string
}

interface imageObjects {
    thumbnail: string,
    small: string
}

const Image: React.FC<ImageProps> = ({imageObjects, sizeImage = "small"}) => 
    <S.Img src={imageObjects?.[0]?.[sizeImage as keyof imageObjects]} sizeImage={sizeImage} />;


export default Image;