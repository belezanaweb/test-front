import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 8vh;
  border-radius: 3px;
  background-color: #FFF;
  box-shadow: 1px 1px 5px 0 rgba(0,0,29,0.22);
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
  position: relative;
  span{
    grid-row: 2/3;
    color: ${props => props.active ? "#FF7800" : "#CCC"}; 
    font-size: 16px;
    font-weight: 500;
    line-height: 16px;
    text-align: center;
}

  @media only screen and (max-width: 360px) {
  span{font-size: 12px;}
  }

  @media only screen and (min-width: 1024px) {
    height: 6vh;
  }

`
export const SpanCart = styled.span`
  &&{
    color: ${props => props.active ? "#FF7800" : "#CCC"}; 
    text-align: left;
    margin-left: 6vw;  
  }
`
export const SpanPayment = styled.span`
  &&{
    color: ${props => props.active ? "#FF7800" : "#CCC"}; 
  }
`
export const SpanSuccess = styled.span`
  &&{
    color: ${props => props.active ? "#FF7800" : "#CCC"}; 
    text-align: right;  
    margin-right: 6vw;  
  }
`


