import styled from "styled-components";
import img from "../../assets/images/img2.jpg";

export const PageContainer = styled.div`
    min-height: 100uv;
    min-width: 100uv;
    background-color: #EEE;  

    @media(min-width: 400px){
        margin: 0px 40px; 
        background-color: #999;
    }        
`
export const MainContainer = styled.div`
    min-width: 100uv;
    min-height: 100uv;     
    display: flex;   
    flex-direction: column; 
    flex-wrap: wrap;
    
    @media(min-width: 400px) {
        background-image: url(${img});
        background-repeat: no-repeat;
        background-clip: border-box;
        background-size: cover;
        margin-left: auto;
        margin-right: auto;                 
    }
`
export const MenuContainer = styled.nav`
    height: 40px;
    width: 100uv;
    border-radius: 3px;
    background-color: #FFF;
    box-shadow: 1px 1px 5px 0 rgba(0,0,29,0.22);
    display: flex;
    justify-content: space-evenly;
    
    @media(min-width: 400px) {
        height: 70px;
        align-items: center;
    }
`
export const TextMenu = styled.p`
    height: 16px;
    width: 100vh;
    color: ${props => (props.primary ? '#CCC' : '#FF6C00')};
    font-family: Helvetica;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: NaNpx;
    line-height: 16px;
    text-align: center;
    border: none;    
    background-color: #FFF;
    
    @media(min-width: 400px) {
        font-size: 18px;
        font-weight: 800;
    }

    &.bag {
        margin:  12px 3px 12px 8px;
    }
    &.payment {
        margin: 12px 10px 12px 0px;
    }
    &.confirmation {
        margin: 12px 16px 12px 0px;
    }
`
export const Text = styled.p`
    height: 17px;
    width: 100uv;
    color: #999;
    font-family: Helvetica;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: NaNpx;
    line-height: 17px;
    margin: 6px 21px 0px 20px;

    @media(min-width: 400px) {
        color: white;
        font-size: 18px;
        font-weight: 800;        
    }
`
export const ButtonConfirmation = styled.button`
    height: 60px;
    width: 341px;
    border-radius: 3px;
    border: none;
    background-color: #FF6C00;
    box-shadow: inset 0 -3px 0 0 #D45A00, 0 2px 4px 0 rgba(0,0,0,0.25);   
    margin: 20px 10px 94px 9px;
    display:flex;
    justify-content: center;

    @media(min-width: 400px){
        width: 400px;
    }

    &:hover {
        background-color: #D45A00;
    }
`
export const ButtonConfirmationText = styled.p`
    height: 24px;
    width: 339px;
    color: #FFF;    
    font-family: Helvetica;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 0.5px;
    line-height: 24px;
    text-align: center;
    margin: 18px 1px 18px 1px;
    border: none;

    @media(min-width: 400px){
        font-size: 22px;
        font-weight: 700;
    }
`
export const Form = styled.div`
    height: 279px;
    width: 340px;
    border-radius: 3px;
    background-color: #FFF;
    box-shadow: 1px 1px 5px 0 rgba(0,0,29,0.22);
    display: grid;
    grid-templater-column: 2fr;
    grid-template-row: 6fr;
    margin: 5px 10px 20px 9px; 

    @media(min-width: 400px){
        height: 300px;
        width: 400px;
    }
`
export const Input = styled.input`
    box-sizing: border-box;
    border-radius: 3px;
    background-color: #FFF;
    border: 1px solid #E7E7E7;
    box-shadow: inset 0 1px 2px 0 rgba(0,0,0,0.2);
    :focus{
        border: 1px solid #a43287;
    }    
    ::placeholder {
        color: #E7E7E7;
        font-family: Helvetica;
    } 
    
    &.cardNumber {
        height: 50px;
        width: 320px;
        grid-column: 1/3;
        grid-row: 2/3;
        margin: 0px 10px 25px 10px; 
        padding: 14px 88px 12px 13px;
        
        @media(min-width: 400px){
            width: 380px;
        }
    }
    &.name {
        height: 50px;
        width: 320px;
        grid-column: 1/3;
        grid-row: 4/5;
        margin: 0px 10px 25px 10px;
        padding: 15px 88px 12px 13px;

        @media(min-width: 400px){
            width: 380px;
        }
    }
    &.cvv {
        height: 50px;
        width: 145px;
        grid-column: 2/3;
        grid-row: 6/7;
        margin: 0px 10px 25px 20px;
        padding: 15px 0px 12px 11px;

        @media(min-width: 400px){
            width: 180px;
        }
    }
    &.expirationDate {
        height: 50px;
        width: 145px; 
        grid-column: 1/2;
        grid-row: 6/7; 
        margin: 0px 0px 25px 10px;
        padding: 13px 14px 13px 13px;

        @media(min-width: 400px){
            width: 180px;
        }
    }
`
export const Label = styled.label`
    height: 14px;
    width: 129.71px;
    color: #CCC;
    font-family: Helvetica;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: NaNpx;
    line-height: 14px;
    display: flex;

    @media(min-width: 400px){
        font-size: 14px;
    }

    &.cardNumber {
        grid-column: 1/3;
        grid-row: 1/2;
        margin: 12px 198.29px 5px 10px;        
    }
    &.name {
        grid-column: 1/3;
        grid-row: 3/4;
        margin: 0px 66px 9px 12px;
    }
    &.cvv {
        grid-column: 2/3;
        grid-row: 5/6;
        margin: 0px 10px 9px 22px;       
    }
    &.expirationDate {
        grid-column: 1/2;
        grid-row: 5/6;
        margin: 0px 0px 9px 10px;       
    }
`
export const Div = styled.div`
    display: grid;
`