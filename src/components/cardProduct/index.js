import React from "react"
import { MainWrapper, ImageWrapper, InfoWrapper, SmallImage, MediumImage } from "./style"

export default function CardProduct (props) {

    const { name, imageObjects, priceSpecification } = props.cart.product

    return(
        <MainWrapper>
            <ImageWrapper>
                <SmallImage src={imageObjects[0].small} alt={name}/>
                <MediumImage src={imageObjects[0].medium} alt={name}/>
            </ImageWrapper>
            <InfoWrapper>
                <p>{name}</p>
                <p>R$ {priceSpecification.price.toFixed(2)}</p>
            </InfoWrapper>
        </MainWrapper>
    )
    
}