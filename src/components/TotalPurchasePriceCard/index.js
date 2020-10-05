import React, { useState, useEffect, useContext } from 'react';

import { MainContainer, Text, DiscountText, TotalPriceText, Wrapper } from "./styles";

import { ProductsContext } from "../../contexts/ProductsContext.js";

const TotalPurchasePriceCard = () => {
    const products = useContext(ProductsContext)
    const [productsPrice, setProductsPrice] = useState("");
    const [shippingPrice, setShippingPrice] = useState("");
    const [discount, setDiscount] = useState("");
    const [totalPurchasePrice, setTotalPurchasePrice] = useState("");

    useEffect(() => { getTotalPurchasePrice() })

    const getTotalPurchasePrice = () => {
        const originalPrices = [];
        let shipping = 5.30;
        let discount = 30.00;

        for(let product of products) { originalPrices.push(product.product.priceSpecification.originalPrice); }

        const productsPrices = originalPrices.reduce((a, b) => a + b, 0);

        setProductsPrice(productsPrices.toFixed(2));
        setShippingPrice(shipping.toFixed(2))
        setDiscount(discount.toFixed(2))
        let total = (productsPrices + shipping) - discount;
        setTotalPurchasePrice(total.toFixed(2));
    }
    return (
        <MainContainer>
            <Wrapper>
                <Text>PRODUTOS</Text><Text>R$ {productsPrice.replace(".", ",")}</Text>
            </Wrapper>
            <Wrapper>
                <Text>FRETE</Text><Text>R$ {shippingPrice.replace(".", ",")}</Text>
            </Wrapper>
            <Wrapper>
                <DiscountText>DESCONTO</DiscountText><DiscountText>- R$ {discount.replace(".", ",")}</DiscountText>
            </Wrapper>
            <Wrapper>
                <TotalPriceText>TOTAL</TotalPriceText><TotalPriceText>R$ {totalPurchasePrice.replace(".", ",")}</TotalPriceText>
            </Wrapper>
        </MainContainer>
    )
}

export default TotalPurchasePriceCard;