import React, { useContext } from 'react';

import { SuccessIconContainer, SuccessIconImg, SuccessText, PaymentWrapper } from "./styles"
import { ProductCard, ProductPriceText, ProductCardImg, ProductContentWrapper, ProductCardText } from "../CartPage/styles"
import { MainContainer, Header, SelectedHeaderText, HeaderText, Body, Heading, CardContainer } from "../../layout/globalstyles";
import SuccessIcon from "../../images/SuccessIcon.png"

import { ProductsContext } from "../../contexts/ProductsContext.js";
import { PaymentInfoContext } from "../../contexts/PaymentInfoContext.js";
import TotalPurchasePriceCard from "../TotalPurchasePriceCard"

const SuccessPage = () => {
    const products = useContext(ProductsContext);
    const paymentInfoContext = useContext(PaymentInfoContext);
    
    return(
        <MainContainer>
            <Header>
                <HeaderText>SACOLA</HeaderText>
                <HeaderText>PAGAMENTO</HeaderText>
                <SelectedHeaderText>CONFIRMAÇÃO</SelectedHeaderText>
            </Header>

            <SuccessIconContainer>
                <SuccessIconImg src={SuccessIcon} />
                <SuccessText>COMPRA EFEITUADA COM SUCESSO</SuccessText>
            </SuccessIconContainer>

            <Body>
                <Heading>PAGAMENTO</Heading>
                <CardContainer>
                    <PaymentWrapper>
                        <p>{paymentInfoContext.creditCard}</p>
                        <p>{paymentInfoContext.name}</p>
                        <p>{paymentInfoContext.expirationDate}</p>
                    </PaymentWrapper>
                </CardContainer>
                <Heading>PRODUTOS</Heading>
                <CardContainer>
                    {products.map((product) => {
                        return (
                            <ProductCard key={product.product.sku}> 
                                <ProductCardImg src={product.product.imageObjects[0].medium} alt="imagem-do-produto" />
                                <ProductContentWrapper>
                                    <ProductCardText>{product.product.name}</ProductCardText>
                                    <ProductPriceText>R$ {product.product.priceSpecification.originalPrice.toFixed(2).replace(".", ",")}</ProductPriceText>
                                </ProductContentWrapper>
                            </ProductCard>
                        )
                    })}
                </CardContainer>
                <TotalPurchasePriceCard />
            </Body>

        </MainContainer>
    )
}

export default SuccessPage;