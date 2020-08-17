import styled from 'styled-components';

export const Container = styled.div`
   display: flex;  
   max-width: 100vw;   
   height: auto;
   flex-direction: column;  
   align-items:center;    
   background-color: var(--color-background-produtcs);
   box-shadow: 1px 1px 5px 0 rgba(0,0,29,0.22);
   border-radius: 3px;  
   margin: 0px 10px;
   padding: 0 12px;
   
`;

export const Border = styled.div`
  box-sizing: border-box;
  border-radius: 3px;
  border: 1px solid var(--color-background);
  display: flex; 
  justify-content:space-between; 
  width: 100%;
  height: 90px;
  margin-bottom: 15px;
  &:nth-child(1){ 
    margin-top: 15px;    
  }

`;

export const ImgContainer = styled.div` 
  padding: 10px;
  margin: auto 0 0 0;
 img{  
   display:block;
   width:65px;
   height:65px;
 }
`;
export const ProductDesc = styled.div`
display: flex;
flex-direction: column;
justify-content:space-between;
p{
  padding: 11px 11px 14px 11px;
  font-size: 13px;  
   line-height: 16px;
   color: var(--color-font);
   
   &:last-of-type{
    font-size: 14px;
    font-weight: 700;  
    line-height: 17px;
    text-align: right;
   }
   span{
     padding-right:5px;
   }
  
   
}
`;

export const ButtonPay = styled.a`
   margin: 0 10px;   
   height: 60px; 
   text-decoration: none;
   background-color:var(--color-button);
   box-shadow: inset 0 -3px 0 0 #D45A00, 0 2px 4px 0 rgba(0,0,0,0.25);
   display:flex;
   align-items:center;
   justify-content: center;
   border-radius: 3px;
   border: none;
   transition: background-color 400ms;
   cursor: pointer;
   &:hover{
            background-color: #D45A00;
   }
   
   p{
    
     color:#FFF;
     font-size: 20px;
    font-weight: 700;
    letter-spacing: 0.5px;
    line-height: 24px;
    text-transform: uppercase;

   }
   
`;

