import React from "react"
import { MainWrapper, ImageWrapper, InfoWrapper } from "./style"

export default function Card (props) {

    const { sku, name, imageObjects, priceSpecification } = props.cart.product

    return(
        <MainWrapper>
            <ImageWrapper>
                <img src={imageObjects[0].small}/>
            </ImageWrapper>
            <InfoWrapper>
                <p>{name}</p>
                <p>R$ {priceSpecification.price.toFixed(2)}</p>
            </InfoWrapper>
        </MainWrapper>
    )
    
}