import styled from "styled-components";

export const TotalContainer = styled.div`
    height: 90%;
    width: 93%;
    border: 1px solid #D8D8D8;
    border-radius: 3px;
    margin: 0px 0px 1vw 3vw;
    display: grid;
    grid-templater-column: 2fr;
    grid-template-row: 4fr;
    background-color: #EEE;

    @media(min-width: 400px){
        width: 90%;        
    }
    @media(min-width: 500px){
        width: 80%;
    }
    @media(min-width: 800px){
        width: 50%;
    }
`
export const Text = styled.p`
    height: 17px;
    width: 124px
    color: #212122;
    font-family: Helvetica;
    font-size: 0.85rem;
    letter-spacing: NaNpx;
    line-height: 17px;
    margin: 0px;
    display: flex;

    @media(min-width: 400px){
        font-size: 16px;
        background-color: #EEE;
    }
                
    &.products {
       grid-collum: 1/2;
       grid-row: 1/2;
       margin: 15px 66px 9px 14px;

    }
    &.shipping {
       grid-collum: 1/2;
       grid-row: 2/3;
       margin: 0px 66px 9px 14px;
    }
    &.productsAmount {
       grid-collum: 2/3;
       grid-row: 1/2;
       margin: 15px 13px 9px 0px;
       justify-content: flex-end;
    }
    &.shippingAmount {
       grid-collum: 2/3;
       grid-row: 2/3;
       margin: 0px 13px 9px 0px;
       justify-content: flex-end;
    }
    &.discount {
        color: #FF7800;
        grid-collum: 1/2;
        grid-row: 3/4;
        margin: 0px 66px 16px 14px;
    }
    &.discountAmount {
        color: #FF7800;
        grid-collum: 2/3;
        grid-row: 3/4;
        margin: 0px 13px 16px 0px;
        justify-content: flex-end;
    }
    &.total {
        font-weight: 700;
        grid-collum: 1/2;
        grid-row: 4/5;
        margin: 0px 66px 13px 14px;
    }
    &.totalAmount {
        font-weight: 700;
        grid-collum: 2/3;
        grid-row: 4/5;
        margin: 0px 13px 13px 0px;
        justify-content: flex-end;
    }
`