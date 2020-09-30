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
export const ProductsContainer = styled.div`
    height: 325px;
    width: 341px;
    border-radius: 3px;
    background-color: #FFF;    
    margin: 5px 10px 20px 9px; 
    
    @media(min-width: 400px){
        height: 375px;
        width: 400px;
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
        font-size: 23px;
        font-weight: 700;
    }
`