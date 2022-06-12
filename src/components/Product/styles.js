import styled from 'styled-components'

export const Container = styled.article`
  width: 100%;
  height: 90px;
  padding: 10px;
  border: 1px solid #eee;
  border-radius: 3px;

  &:not(:last-child) {
    margin-bottom: 15px;
  }
`
export const ImageContainer = styled.div`
  width: 20%;
  height: 100%;
  background: red;
`
export const TextContainer = styled.div`
  width: 80%;
  height: 100%;
`
export const ProductTitle = styled.p`
  font-size: 0.81rem;
  font-weight: 400;
  margin-bottom: auto;
`
export const Price = styled.p`
  font-size: 0.81rem;
  font-weight: 800;
  text-align: left;
`
