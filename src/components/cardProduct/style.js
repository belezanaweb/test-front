import styled from "styled-components";

export const MainWrapper = styled.div`
    font-size: 14px;
    width: 90%;;
    border-radius: 3px;
    border: 1px solid #EEE;
    padding: 12px 10px;
    display: flex;
    flex-direction: space-between;
    margin: 12px;
`

export const ImageWrapper = styled.div`
    align-self: center;
`

export const InfoWrapper = styled.div` 
    margin-left: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    p:nth-of-type(2){
        align-self: flex-end;
        font-weight: bold;
    }
` 

export const SmallImage = styled.img ` 
    @media (min-width: 800px) {
        display: none;
    }
`

export const MediumImage = styled.img`
    display: none;
    
    @media (min-width: 800px) {
        display: block;
    }
`
