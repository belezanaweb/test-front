import styled from "styled-components";

export const ProductCard = styled.div`
    display: flex;
    width: 92.63%; /* width: 316px ; */
    height: 90px;
    border-radius: 3px;
    border: 1px solid #EEE;
    padding-top: 12px;
    margin-bottom: 12px;

`
export const ProductCardImg = styled.img`
    width: 65px; /** 65px */;
    height: 65px; /** 65px */;

`
export const ProductContentWrapper = styled.div`
    width: 100%; /* 220px */
    margin-left: 16px;
    margin-right: 16px;
    display: flex;
    flex-direction: column;
    height: 80px; /* 65px */
`

export const ProductCardText = styled.p`  
    margin: 0;
    font-size: 13px;
    line-height: 16px;
    color: #212122;
`
export const ProductPriceText = styled.p`
    width: 100%;
    color: #212122;
    font-size: 14px;
    font-weight: 700;
    line-height: 17px;
    text-align: right;
    margin-bottom: 0;
`

