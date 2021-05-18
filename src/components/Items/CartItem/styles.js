import styled from 'styled-components'
import px2vw from '../../../utils/px2vw'

export const Container = styled.div`
  width: 100%;

  border: 1px solid #eee;
  border-radius: 3px;

  margin-bottom: ${px2vw(30)};
  padding: ${px2vw(24)} ${px2vw(20)};
`

export const ImageContainer = styled.div`
  width: 30%;
`

export const DescriptionContainer = styled.div`
  width: 70%;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
`

export const Name = styled.p`
  color: #212122;
`

export const Price = styled.p`
  color: #212122;
  font-weight: bold;
`
