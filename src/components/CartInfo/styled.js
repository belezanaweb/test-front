import styled from 'styled-components'

export const Box = styled.div`
  width: 100%;
  border-radius: 3px;
  border: 1px solid #ccc;
  padding: 13px;
  margin-bottom: 15px;
  flex-wrap: wrap;
`

export const Info = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
  &:last-child {
    text-align: right;
  }
`
