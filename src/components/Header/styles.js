import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;      
    border-radius: 3px;
     background-color: #FFF;
      box-shadow: 1px 1px 5px 0 rgba(0,0,29,0.22);
      margin-bottom: 10px;
      ul{
        margin: 0 auto;
        max-width: 740px;
        display:flex;
        justify-content:space-between;
        align-items: center;
        
        li{
          padding: 12px 22px;             
         list-style:none;
        }
      }

    
    

`;
export const Active = styled.p`
      color:${props => props.color};
      font-size: 13px;
      text-transform:uppercase;
      font-weight: 700;        
      line-height: 16px;
      text-align: center;

`;