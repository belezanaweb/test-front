import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 90px;
  border: 1px solid #eee;
  padding: 10px;
  margin-bottom: 15px;
`

export const ProductItem = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  img {
    max-width: 50px;
    width: 100%;
    max-height: 50px;
    min-height: auto;
    margin-right: 11px;
  }
`

export const ProductDescription = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;

  .description {
    color: #212122;
    font-size: 13px;
    letter-spacing: NaNpx;
    line-height: 16px;
    width: 220px;
  }

  .value {
    display: flex;
    justify-content: flex-end;
    height: 17px;
    color: #212122;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: NaNpx;
    line-height: 17px;
  }
`
