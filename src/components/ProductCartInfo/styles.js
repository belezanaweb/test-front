import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 360px;
  margin: auto;
  background: #eee;
  border-radius: 2px;
  box-shadow: 0px 3px 8px 1px rrgba(0, 0, 29, 0.22);
`

export const Total = styled.div`
  display: flex;
  width: 341px;
  margin-top: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  display: flex;
  flex-direction: column;

  .items {
    margin-bottom: 10px;
  }

  p {
    font-size: 14px;
    width: 100%;
    text-transform: uppercase;
    display: flex;
    justify-content: space-between;
    line-height: 1.8;
    /* margin: 2px 0; */
  }

  .discount {
    color: #ff7800;
  }

  .total {
    font-weight: bold;
    color: #212122;
  }
`
