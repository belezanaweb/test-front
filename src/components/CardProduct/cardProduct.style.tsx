import styled from "styled-components";

export const Container = styled.div`
box-sizing: border-box;
display: flex;
flex-direction: column;
align-items: center;
padding: 24px 8px 24px 8px;
gap: 40px;
background: #FFFFFF;
border: 1px solid #CCCCCC;
border-radius: 4px;
`

export const ContainerProduct = styled.div`
display: grid;
grid-template-columns: 1fr 5fr 1fr;
align-items: center;
padding: 0px;
gap: 10px;
justify-content: center;
width: 100%;
`

export const ProductDescritpion = styled.div`
font-family: 'Arial';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 16px;
text-align: lefT;
letter-spacing: 0.269231px;
color: #000000;
` 

export const PriceOriginal = styled.div`
font-family: 'Arial';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 16px;
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
text-align: right;
letter-spacing: 0.269231px;
color: #9B9B9B;
`