import React, { useContext } from 'react';

import { ProductCard, ProductPriceText, ProductCardImg, ProductContentWrapper, ProductCardText  } from "./styles"
import { MainContainer, Header, SelectedHeaderText, HeaderText, Body, Heading, CardContainer, Button } from "../../layout/globalstyles";

import { ProductsContext } from "../../contexts/ProductsContext.js";
import TotalPurchasePriceCard from "../TotalPurchasePriceCard"

import { useHistory } from 'react-router-dom';

const CartPage = () => {
    const products = useContext(ProductsContext)
    const history = useHistory();

    const changePage = (page) => { history.push(page) }
    return(
        <MainContainer>
            <Header>
                <SelectedHeaderText>SACOLA</SelectedHeaderText>
                <HeaderText onClick={() => changePage("/payment")}>PAGAMENTO</HeaderText>
                <HeaderText>CONFIRMAÇÃO</HeaderText>
            </Header>
            <Body>
                <Heading>PRODUTOS</Heading>
                <CardContainer>
                    {products.map((product) => 
                    { return (
                    <ProductCard key={product.product.sku}> 
                        <ProductCardImg src={product.product.imageObjects[0].medium} alt="imagem-do-produto" />
                        <ProductContentWrapper>
                            <ProductCardText>{product.product.name}</ProductCardText>
                            <ProductPriceText>R$ {product.product.priceSpecification.originalPrice.toFixed(2).replace(".", ",")}</ProductPriceText>
                        </ProductContentWrapper>
                    </ProductCard>
                    )})}
                </CardContainer>
                <TotalPurchasePriceCard />
                <Button onClick={() => changePage("/payment")}>SEGUIR PARA O PAGAMENTO</Button>
            </Body>
        </MainContainer>
    )
}

export default CartPage;