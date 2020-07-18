import styled from "styled-components";

export const CartWrapper = styled.div` 
    padding: 10px;

    h2 {
        color: #999;
        font-size: 14px;
        font-weight: 700;
        text-transform: uppercase;
        margin-top: 0;
        margin-bottom: 5px;
        margin-left: 12px; 
    }

    @media (min-width: 800px) {
        padding: 5px 450px;
        
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