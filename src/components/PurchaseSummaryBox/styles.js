import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  height: 129px;
  width: 100%;
  border: 1px solid #ccc;
  padding: 15px;
  align-items: center;

  p {
    height: 17px;
    color: #212122;
    font-size: 14px;
    letter-spacing: NaNpx;
    line-height: 17px;
  }

  ul {
    width: 100%;
  }

  ul li {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    list-style: none;
    margin-bottom: 8px;
  }

  .discount {
    p {
      color: #ff7800 !important;
    }
  }

  .total {
    margin-top: 16px;
    margin-bottom: 0 !important;
    font-weight: 700;
  }
`
