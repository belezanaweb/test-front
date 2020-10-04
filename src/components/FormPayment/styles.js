import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  h1{
    margin-left:3vw;
    color: #999;
    font-size: 16px;
    text-transform: uppercase;
    font-weight: 700;
    line-height: 17px;
  }
`

export const ContentContainer = styled.div`
  height: fit-content;
  width: 100%;
  padding: 3vw;
  display: flex;
  flex-wrap: wrap;
  background-color: #FFF;
  border-radius: 3px;
  box-shadow: 1px 1px 5px 0 rgba(0,0,29,0.22);
  justify-content: space-between;
`
export const InputContainer = styled.div`
  width: ${props => props.inputWidth || "100%"};
  display: flex;
  flex-direction: column;
  font-size: 12px;
  font-weight: bold;
  color: #CCC;
  margin-bottom:1vw;
  margin-top:1vw;
  label{
    text-transform: capitalize;
    width: 100%;
  }
  input{
    height: 6vh;    
    width: 100%;
    border-radius: 3px;
    background-color: #FFF;
    border: 1px solid #E7E7E7;
    border-color: ${props => props.borderErro ? ("#F30") : ("#E7E7E7")};
    box-shadow: inset 0 1px 2px 0 rgba(0,0,0,0.2);
    font-size: 16px;
    letter-spacing: 1.37px;
    line-height: 19px;
    padding-left: 9px;
    padding-right: 9px;
    :focus{
        outline:none;
        border: 1px solid #A43287;
    }
    ::placeholder {
      color: #E0E7EE;
    }
  }
  span{
    text-transform: capitalize;
    width: 100%;
    font-size: 12px;
    margin-top: 1vh;
    color: ${props => props.borderErro ? ("#F30") : ("transparent")};

  }
`
