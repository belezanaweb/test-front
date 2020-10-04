import styled from 'styled-components'

export const ProductsListWrapper = styled.div`
  width: 100%;
  display: grid;
  gap: 15px;
  font-size: 13px;
`

export const CardWrapper = styled.div`
  width: 100%;
  display: flex;
  border: 1px solid #EEE;
  border-radius: 3px;
  padding: 10px;
`

export const CardDetails = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: flex-end;
  justify-content: space-between;
  margin-left: 11px;
`

export const Price = styled.label`
  font-weight: bold;
  padding-top: 15px;
`

export const Img = styled.img`
  height: 65px;
`