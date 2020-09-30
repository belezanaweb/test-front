import styled from "styled-components";
import img from "../../assets/images/img2.jpg";

export const PageContainer = styled.div`
    min-height: 100uv;
    min-width: 100uv;
    margin: 0px;
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

    @media(min-width: 400px){
        color: white;
        font-size: 18px;
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
            font-size: 22px;
            width: 400px;
            margin: 20px 10px; 
            color: #15ff00;           
        }
    }
`
export const Container = styled.div`
    border-radius: 3px;
    background-color: #FFF;    
    margin: 5px 10px 10px 9px;

    &.products{
        height: 100uv;
        width: 340px;

        @media(min-width: 400px){
            height: 375px;
            width: 400px;
        }
    }
    &.clientInformations {
        height: 73px;
        width: 340px;
        
        @media(min-width: 400px){
            height: 85px;
            width: 400px;
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