import styled from 'styled-components';

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