import styled from "styled-components";

export const MainContainer = styled.div`
    margin: 20px 0px;
    box-sizing: border-box;
    height: 129px;
    width: 94.72%; /* 341px */
    border-radius: 3px;
    border: 1px solid #CCC;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    @media (min-width: 720px) {
        width: 681.98px;
    }
`
export const Text = styled.div`
    color: #212122;
    font-size: 14px;
    line-height: 17px;
    display: flex;
    justify-content: space-between;
`

export const DiscountText = styled.div`
    color: #FF7800;
    font-size: 14px;
    line-height: 17px;
    display: flex;
    justify-content: space-between;
`

export const TotalPriceText = styled.div`
    color: #212122;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    display: flex;
    justify-content: space-between;
`

export const Wrapper = styled.div`
    width: 92.96%; /* 317px */
    display: flex;
    justify-content: space-between;

`