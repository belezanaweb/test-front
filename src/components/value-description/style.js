import styled from 'styled-components'

export const Container = styled.div`
  padding: 5px;
  width:90%;
  margin: 20px auto;
  display:flex;
  flex-direction:row;
  border: 1px solid #cecece;
  text-transform: uppercase;
  font-size: 1em;

  li{
    list-style-type:none;
  }

  .discount{
    color:#fa7a39;
  }

  .total {
    font-weight:bold;
    margin: 10px 0;
  }

`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:space-around;
  align-items:flex-start;
  font-family: 'Helvetica';
  margin-left:12px;
  width:100%;

  .price {
    font-weight:bold;
  }
`;

export const Value = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:space-around;
  align-items:flex-end;
  font-family: 'Helvetica';
  margin-left:12px;
  width:100%;

  li{
    margin: 5px 0;
  }



`;
