import styled from 'styled-components';

export const Container = styled.div`
   margin: 20px 10px;
   padding: 15px 14px;
   border-radius: 3px;
   border: 1px solid var(--color-border-total);
`;

export const Lista = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 10px;
   p{
    font-size: 14px;    
    line-height: 17px;
    text-transform: uppercase;
    span{
     padding-right:5px;
   }
   }
   &:nth-last-of-type(2){
    color: var(--color-font-total-desc);
   }
   &:last-of-type{
      padding-top:6px;
      margin-bottom: 0px;
      font-weight: 700;      
   }

`;