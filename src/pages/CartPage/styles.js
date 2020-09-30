import styled from "styled-components";
import img from "../../assets/images/img2.jpg";

export const PageContainer = styled.div`
    min-height: 100vh;
    min-width: 80vw;
    background-color: #EEE; 
    
    @media(min-width: 400px){        
        background-color: #999;
    }
    @media(min-width: 700px){
        margin: 0px 7vh; 
        background-color: #999;
    }
`
export const MainContainer = styled.div`
    min-width: 80vw; 
    min-height: 100vh;   
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
    height: 9vh;
    width: 100vw;
    border-radius: 3px;
    background-color: #FFF;
    box-shadow: 1px 1px 5px 0 rgba(0,0,29,0.22);
    display: flex;
    justify-content: space-evenly;
    
    @media(min-width: 400px) {
        height: 10vh;
        width: 100vw;
        align-items: center;
    }
    @media(min-width: 700px) {
        height: 12vh;
        width: 100%;
        align-items: center;
    }
`
export const TextMenu = styled.p`
    height: 16px ;
    width: 100vw;
    color: ${props => (props.primary ? '#CCC' : '#FF6C00')};
    font-family: Helvetica;
    font-size: 0.8rem;
    font-weight: 700;
    letter-spacing: NaNpx;
    line-height: 16px;
    text-align: center;
    border: none;    
    background-color: #FFF; 
    
    @media(min-width: 400px) {
        font-size: 1rem;        
        font-weight: 800;
    }
    @media(min-width: 700px) {
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
    height: 4vh;
    width: 30vw;
    color: #999;
    font-family: Helvetica;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: NaNpx;
    line-height: 17px;
    margin: 3vh 10vw 2vh 3vw;  
    
    @media(min-width: 400px) {
        color: white;
        font-size: 1.3rem;
        font-weight: 800;
    }
`
export const ProductsContainer = styled.div`
    height: 78vh;
    width: 93%;
    border-radius: 3px;
    background-color: #FFF;    
    margin: 1vh 3vh 4vh 3vw; 
    
    @media(min-width: 400px){
        height: 85vh;
        width: 90%;        
        margin: 1vh 3vh 4vh 3vw;
    }
    @media(min-width: 500px){
        height: 85vh;
        width: 80%;
        margin: 1vh 3vh 4vh 3vw;
    }
    @media(min-width: 800px){
        height: 85vh;
        width: 50%;
        margin: 1vh 3vh 4vh 3vw;
    }
`
export const ButtonConfirmation = styled.button`
    height: 13vh;
    width: 93%;
    border-radius: 3px;
    border: none;
    background-color: #FF6C00;
    box-shadow: inset 0 -3px 0 0 #D45A00, 0 2px 4px 0 rgba(0,0,0,0.25);   
    margin: 2vh 0px 20vh 3vw;
    display:flex;
    justify-content: center;

    @media(min-width: 400px){
        width: 90%;
        height: 12vh;
        margin: 2vh 0px 20vh 3vw;
    }
    @media(min-width: 500px){
        width: 80%;
        height: 12vh;
        margin: 2vh 0px 20vh 3vw;
    }
    @media(min-width: 800px){        
        width: 50%;
        height: 12vh;
        margin: 2vh 0px 20vh 3vw;
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
    margin: 3vh 0px 2vh 0px;
    border: none;

    @media(min-width: 400px){
        margin: 3vh 0px 2vh 0px;
        font-size: 23px;
        font-weight: 700;
    }
`