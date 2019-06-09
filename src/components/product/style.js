import styled from 'styled-components'

export const Container = styled.div`
  padding: 10px;
  display:flex;
  flex-direction:row;
  border: 1px solid #c7c6c666;
  margin: 5px auto 15px;;
  width:90%;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:space-around;
  align-items:flex-end;
  font-family: 'Helvetica';
  font-size:0.8em;
  margin-left:12px;
  width:100%;

  .price {
    font-weight:bold;
  }
`;
