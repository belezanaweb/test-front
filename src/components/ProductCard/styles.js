import styled from "styled-components";

export const Card = styled.div`
    height: 22vh;
    width: 94%;
    border: 1px solid #EEE;
    border-radius: 3px;
    margin: 3vh 3vw 3.5vh 3.5vw;
    display: grid;
    grid-template-column: 2fr;
    grid-template-row: 2fr;

    @media(min-width: 400px){
        height: 24vh;
        width: 94%;
        &:hover {
            border-color: #FF7800;
        }
    }  
    @media(min-width: 500px){
        height: 24vh;
        width: 94%;
        &:hover {
            border-color: #FF7800;
        }          
    } 
    @media(min-width: 800px){
        height: 24vh;
        width: 90%;
        &:hover {
            border-color: #FF7800;
        }
    }
`
export const ProductImage = styled.img`
    height: 17vh;
    width: 17vw;
    grid-column: 1/2;
    grid-row: 1/3;
    align-items: center;
    margin: 1vh 2vw 2vh 3vh;

    @media(min-width: 400px){
        height: 20vh;
        width: 20vh;
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
    margin: 4vh 3vw 2.5vh 0px;

    @media(min-width: 400px){
        justify-self: stretch
        font-size: 1rem;   
    }
    @media(min-width: 800px){
        justify-self: stretch
        font-size: 1.2rem;   
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
    margin: 0px 3vw 20vh 0px;

    media(min-width: 400px){
        font-size: 16px;   
    }
`