import styled from 'styled-components'

export const Container = styled.article`
  width: 100%;
  padding: 10px;
  border: 1px solid #eee;
  border-radius: 3px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 15px;
  }
`
export const ImageContainer = styled.div`
  width: 23%;
  height: 100%;
`

export const TextContainer = styled.div`
  width: 77%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  font-size: 13px;
  line-height: 1rem;
  font-weight: 300;
  @media screen and (min-width: 1024px) {
    p {
      font-size: 1rem;
    }
  }
`
export const ProductTitle = styled.p`
  font-weight: 400;
  font-size: 13px;
  @media screen and (min-width: 1024px) {
    font-size: 1rem;
  }
`
export const Price = styled.p`
  font-weight: 800;
  text-align: left;
  padding-top: 13px;
  display: ${(props) => `${props.hidePrice ? 'none' : 'block'}`};
`
