import styled from "styled-components";

export const Card = styled.div`
    height: 90px;
    width: 316px;
    border: 1px solid #EEE;
    border-radius: 3px;
    margin: 12px 12px 13px 13px;
    display: grid;
    grid-template-column: 2fr;
    grid-template-row: 2fr;


    @media(min-width: 400px){
        height: 105px;
        width: 366px;
        &:hover {
            border-color: #FF7800;
        }
    }    
`
export const ProductImage = styled.img`
    height: 65px;
    width: 65px;
    grid-column: 1/2;
    grid-row: 1/3;
    align-items: center;
    margin: 11px 11px 14px 10px;

    @media(min-width: 400px){
        height: 75px;
        width: 75px;
    }
`
export const ProductTextsimple = styled.p`
    height: 32px;
    width: 220px;
    color: #212122;
    font-family: Helvetica;
    font-size: 13px;
    letter-spacing: NaNpx;
    line-height: 16px;
    grid-column: 2/3;
    grid-row: 1/2;
    align-items: center;
    margin: 12px 10px 15px 0px;

    @media(min-width: 400px){
        font-size: 14px;   
    }
`
export const ProductTextStrong = styled.p`
    height: 17px;
    width: 220px;
    color: #212122;
    font-family: Helvetica;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: NaNpx;
    line-height: 17px;
    text-align: right;
    grid-column: 2/3;
    grid-row: 2/3;
    margin: 0px 10px 14px 0px;

    media(min-width: 400px){
        font-size: 16px;   
    }
`