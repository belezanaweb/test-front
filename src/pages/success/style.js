import styled from "styled-components";

export const MainWrapper = styled.section`
    background-color: #EEE;
    padding: 10px;

    h2 {
        color: #999;
        font-size: 14px;
        font-weight: 700;
        text-transform: uppercase;
        margin-top: 20px;
        margin-bottom: 5px;
    }
`

export const ImageWrapper = styled.div` 
    display: flex;
    align-items: center;
    justify-content: center;
`

export const PaymentWrapper = styled.div`
    border-radius: 3px;
    background-color: #FFF;
    box-shadow: 1px 1px 5px 0 rgba(0,0,29,0.22);
    padding: 12px;

    p {
        margin: 5px 0;
        font-size: 14px;
    }

    p:nth-of-type(2){
        text-transform: uppercase;
    }
`

export const ProductsWrapper = styled.div` 
    border-radius: 3px;
    background-color: #FFF;
    box-shadow: 1px 1px 5px 0 rgba(0,0,29,0.22);
  
    display: flex;
    flex-direction: column;
    align-items: center;
`