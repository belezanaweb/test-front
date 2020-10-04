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
   
    &.textInformationsBlack {
        height: 68px;
        width: 310px;
        color: #000;
        font-family: Helvetica;
        font-size: 14px;
        letter-spacing: NaNpx;
        line-height: 17px;
        margin: 20px 10px;
        display: flex;  
        
        @media(min-width: 400px){
            font-size: 3.5vh;
            line-height: 5vh;
        }
        @media(min-width: 500px){
            font-size: 4.5vh;
            line-height: 5vh;
        }
    }
    &.textConfirmationOrange {
        height: 17px;
        width: 266.27px;
        color: #FF7800;
        font-family: Helvetica;
        font-size: 14px;
        font-weight: 700;
        letter-spacing: NaNpx;
        line-height: 17px;
        text-align: center;
        margin: 11.08px 47.73px 20.43px 46px;

        @media(min-width: 400px){
            font-size: 3.5vh;
            width: 90%;
            font-weight: 800;
            margin: 3vh 3vw; 
            color: #15ff00;           
        }        
        @media(min-width: 500px){
            width: 80%;
            font-size: 4.5vh;
            font-weight: 800;
            margin: 3vh 3vw; 
            color: #15ff00;
        }
        @media(min-width: 800px){
            font-size: 4.5vh;
            width: 50%;
            font-weight: 800;
            margin: 3vh 3vw; 
            color: #15ff00;
        }
    }
`
export const Container = styled.div`
    border-radius: 3px;
    background-color: #FFF;    
    margin: 1vh 3vh 4vh 3vw;

    &.products{
        height: 75vh;
        width: 93%;
        border-radius: 3px;
        background-color: #FFF;   
        margin: 1vh 3vh 4vh 3vw;
        
        @media(min-width: 400px){
            height: 85vh;
            width: 90%;            
        }
        @media(min-width: 500px){
            height: 85vh;
            width: 80%;
        }
        @media(min-width: 800px){
            height: 85vh;
            width: 50%;
        }
    }
    &.clientInformations {
        height: 20vh;
        width: 93%;        
        
        @media(min-width: 400px){
            height: 25vh;
            width: 90%;            
        }
        @media(min-width: 500px){
            height: 30vh;
            width: 80%;
        }
        @media(min-width: 800px){
            height: 32vh;
            width: 50%;
        }
    }      
`
export const DivImage = styled.div`
    border: none;
    diplay: flex;   
    position: relative;
`
export const Image = styled.img`
    height: 39.51px;
    width: 39.51px; 
    justify-content: center;
    border: none;
    margin: 12px 160.72px 0px 159.78px; 
    
    @media(min-width: 400px){
        display: none;
    }      
`