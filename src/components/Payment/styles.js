import styled from 'styled-components';

export const FormPay = styled.form`
  width: 100%;
  display:flex;
  flex-direction:column;
   
`;
export const FormBack = styled.div`

    background-color: var(--color-background-produtcs);
   box-shadow: 1px 1px 5px 0 rgba(0,0,29,0.22);
   border-radius: 3px;
    margin: 0 10px;
    padding: 12px 12px 0 12px;
`;


export const DivForm = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 20px;
    
`;

export const LabelForm = styled.label`
    height: 14px;
    color: #CCC;    
    font-size: 12px;
    font-weight: 700;    
    line-height: 14px;
    width: 100%;
    
`;
export const InputForm = styled.input`
     
      width:100%;      
      border-radius: 3px;
      background-color: #FFF;
      border: 1px solid #E7E7E7;
      box-shadow: inset 0 1px 2px 0 rgba(0,0,0,0.2);
      box-sizing: border-box;
      height: 45px;
      margin-top: 5px;
      margin-bottom: 25px;
      display: block;      
      padding-top: 12px;
      padding-left: 13px;
      padding-bottom: 12px;
      font-size: 16px;
      line-height: 19px;
      font-family: "Helvetica Neue", Helvetica, Helvetica, Arial, sans-serif ;
      color: var(--colot-font);
      
     

      &::placeholder{
      
      color: var(--color-placeholder);       
      font-size: 16px;
      letter-spacing: 1.37px;
      line-height: 19px;
      }
      &:focus{
        
        border-radius: 3px;
        background-color: #FFF;
        border: 1px solid #A43287;
        box-shadow: inset 0 1px 2px 0 rgba(0,0,0,0.2);
      }   
      &:focus:invalid{
        border: 1px solid #F30;
      }
      
     

`;

export const ButtonConfirmation = styled.button`
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
export const Span = styled.span`
    display:block;
    margin-top:-20px;
    font-size: 12px;  
    line-height: 14px;
    color:#f30;

`;