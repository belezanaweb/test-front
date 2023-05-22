import styled from "styled-components";

export const Container = styled.div`

box-sizing: border-box;

/* Auto layout */
display: flex;
flex-direction: column;
align-items: center;
padding: 24px 0px 24px ;
gap: 40px;


background: #FFFFFF;
border: 1px solid #CCCCCC;
border-radius: 4px;
`

export const ContainerProduct = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 0px;
gap: 15px;

max-width: 500px;
`

export const ProductDescritpion = styled.div`

font-family: 'Arial';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 16px;

letter-spacing: 0.269231px;

color: #000000;
` 

export const PriceOriginal = styled.div`
font-family: 'Arial';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 16px;

/* identical to box height, or 114% */
text-align: right;
letter-spacing: 0.269231px;

color: #000000;
`

export const MaxPrice = styled.div`
font-family: 'Arial';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;
text-decoration: line-through;

/* identical to box height, or 114% */
text-align: right;
letter-spacing: 0.269231px;

color: #9B9B9B;

`