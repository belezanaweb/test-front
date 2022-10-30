import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  padding: 11px 10px 14px;
  border: 1px solid #eee;
  border-radius: 3px;

  &:not(:last-of-type) {
    margin-bottom: 15px;
  }
`
export const Image = styled.img`
  height: 64px;
  width: 64px;
`

export const Content = styled.p`
  margin-left: 11px;
  display: flex;
  flex-direction: column;
`

export const Title = styled.p`
  font-size: 13px;
  color: #212122;
  line-height: 16px;
`

export const Price = styled.p`
  font-size: 14px;
  color: #212122;
  font-weight: bold;
  text-align: right;
  margin-top: auto;
`
