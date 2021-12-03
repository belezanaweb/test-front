import styled from 'styled-components'

export const CartBox = styled.div`
  width: 100%;
  border-radius: 3px;
  background-color: #fff;
  padding: 13px;
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 29, 0.22);
  margin-bottom: 15px;
`

export const CartItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  width: 100%;
  padding: 13px;
  border-radius: 3px;
  border: 1px solid #eee;
  margin-bottom: 15px;
  &:last-child {
    margin-bottom: 0px;
  }
`

export const Image = styled.div`
  width: 20%;
  height: 65px;
`

export const Info = styled.div`
  width: 80%;
  height: 65px;
`

export const Name = styled.div`
  font-size: 13px;
  min-height: 50px;
`

export const Price = styled.div`
  font-size: 14px;
  font-weight: bold;
  text-align: right;
`
