import styled from 'styled-components'

export const Container = styled.article`
  width: 100%;
  /* height: 90px; */
  padding: 10px;
  border: 1px solid #eee;
  border-radius: 3px;
  display: flex;
  justify-content: space-between;
  align-items: ${(props) => `${props.isConfirmation ? '' : 'center'}`};
  padding-bottom: ${(props) => `${props.isConfirmation ? '7' : ''}px`};
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
  font-size: 0.81rem;
  line-height: 1rem;
`
export const ProductTitle = styled.p`
  font-weight: 400;
`
export const Price = styled.p`
  display: ${(props) => `${props.isConfirmation ? 'none' : 'block'}`};
  font-weight: 800;
  text-align: left;
  padding-top: 13px;
`
