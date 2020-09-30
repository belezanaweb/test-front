import styled from 'styled-components';

export const ContainerTable = styled.div`
  margin-top: 2vw;
  text-align: center;
`;

export const ProductTable = styled.div`
  width: 100%;

 h1 {
   color: #999;
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    text-align: left;
    padding: 12px;
  }

  ul {
    list-style-type: none;
    padding: 12px;
    border-radius: 3px;
    background-color: #FFF;
    box-shadow: 1px 1px 5px 0 rgba(0,0,29,0.22);

    li {
      display: flex;
      justify-content: space-between;
      border: 1px solid #eee;
      margin: 15px 0;
      border-radius: 3px;


      img {
        height: 70px;
        align-self: center;
      }
    }
  }

  span {
    padding: 12px;

    strong {
    color: #333;
    display: block;
    text-align: right;
    margin-top: 15px;
  }

    p {
      margin-top: 5px;
    }
  }
`

export const Total = styled.div `
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
