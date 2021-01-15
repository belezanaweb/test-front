import styled from 'styled-components'

export const Button = styled.button`
margin-top:15px;
  border-radius: 3px;
  background-color: #FF6C00;
  box-shadow: inset 0 -3px 0 0 #D45A00, 0 2px 4px 0 rgba(0,0,0,0.25);
  color: #FFF;
  font-family:"Helvetica Neue";
  font-size: 20px;
  font-weight: 700;
    line-height: 24px;
  text-align: center;
  text-transform:uppercase;
  border:0px;
  width:100%;
  padding:15px;
  transition: background 0.2s ease 0s;
  &:hover {
    transition: background 0.2s ease 0s;
    background: rgb(212, 90, 0);
  }
}
`
