import React from "react"
import { MainWrapper, InfoWrapper } from "./style"

export default function CardPrices(props){
    const {subTotal, shippingTotal, discount, total } = props.cart

    return(
        <MainWrapper>
            <InfoWrapper>
                <p>produtos</p>
                <p>R$ {subTotal.toFixed(2)}</p>
            </InfoWrapper>
            <InfoWrapper>
                <p>frete</p>
                <p>R$ {shippingTotal.toFixed(2)}</p>
            </InfoWrapper>
            <InfoWrapper>
                <p>desconto</p>
                <p>- R$ {discount.toFixed(2)}</p>
            </InfoWrapper>
            <InfoWrapper>
                <p>total</p>
                 <p>R$ {total.toFixed(2)}</p>
            </InfoWrapper>
        </MainWrapper>
    )
}