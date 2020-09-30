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
    background: #fff;

    li {
      display: flex;
      justify-content: space-between;
      border: 1px solid #eee;
      margin: 5px 0;
      border-radius: 3px;
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

    img {
      height: 100px;
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
  }

  span:nth-child(2) {
    text-align: right;
  }
`

export const Button = styled.button`
  border: none;
  height: 60px;
  width: 341px;
  border-radius: 3px;
  background-color: #FF6C00;
  box-shadow: inset 0 -3px 0 0 #D45A00, 0 2px 4px 0 rgba(0,0,0,0.25);
  color: #FFF;
  font-family: "Helvetica Neue";
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0.5px;
  line-height: 24px;
  text-align: center;
`
