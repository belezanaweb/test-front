import React, { useState, useEffect } from "react";
import Paper from '@material-ui/core/Paper';
import axios from "axios";
import Grid from '@material-ui/core/Grid';
import styled from "styled-components";

const baseUrl = "http://www.mocky.io/v2/5b15c4923100004a006f3c07";

const TextBlack = styled.p`
    font-family: Arial, Helvetica, sans-serif;
    color: #212122;
    size: 16px;
    margin-left: 5%;
`;

const TextBlackValue = styled.p`
    font-family: Arial, Helvetica, sans-serif;
    color: #212122;
    size: 16px;
    margin-right: 5%;
    text-align: right;
`;

const TextOrange = styled.p`
    font-family: Arial, Helvetica, sans-serif;
    color: #FF7800;
    size: 16px;
    margin-left: 5%;
`;

const TextOrangeValue = styled.p`
    font-family: Arial, Helvetica, sans-serif;
    color: #FF7800;
    size: 16px;
    margin-right: 5%;
    text-align: right;
`;

const TextBold = styled.p`
    font-family: Arial, Helvetica, sans-serif;
    color: #212122;
    size: 16px;
    font-weight: bold;
    margin-left: 5%;
`;

const TextBoldValue = styled.p`
    font-family: Arial, Helvetica, sans-serif;
    color: #212122;
    size: 16px;
    margin-right: 5%;
    text-align: right;
`;


const ContainerTotalPrice = (props) => {
    const [products, setProducts] = useState("");

    useEffect(() => {
        axios.get(baseUrl).then((response) => {
            setProducts(response.data);
        });
    }, []);

    const total = products.subTotal + products.shippingTotal - products.discount;

    return (
        <Paper variant="outlined" >
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <TextBlack>PRODUTOS</TextBlack>
                </Grid>
                <Grid item xs={6}>
                    <TextBlackValue>{products.subTotal && products.subTotal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</TextBlackValue>
                </Grid>
                <Grid item xs={6}>
                    <TextBlack>FRETE</TextBlack>
                </Grid>
                <Grid item xs={6}>
                    <TextBlackValue>{products.shippingTotal && products.shippingTotal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</TextBlackValue>
                </Grid>
                <Grid item xs={6}>
                    <TextOrange>DESCONTO</TextOrange>
                </Grid>
                <Grid item xs={6}>
                    <TextOrangeValue>-{products.discount && products.discount.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</TextOrangeValue>
                </Grid>
                <Grid item xs={6}>
                    <TextBold>TOTAL</TextBold>
                </Grid>
                <Grid item xs={6}>
                    <TextBoldValue>{total.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</TextBoldValue>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default ContainerTotalPrice;
