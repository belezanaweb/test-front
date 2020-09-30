import styled from 'styled-components';

export const Container = styled.div `
margin: 5vh 0;
padding: 6px 0;
width: 100%;
text-transform: uppercase;
border-radius: 3px;
border: 1px solid #CCC;

div {
  display: flex;
  justify-content: space-between;
  padding: 9px 12px;
  font-size: 14px;
  line-height: 17px;
}

div.discount {
  color: #FF7800;
}

div.total {
  font-weight: 700;
}

span:nth-child(2) {
  text-align: right;
}
`
