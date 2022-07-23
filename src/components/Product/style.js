import styled from 'styled-components'

export const Container = styled.article`
  width: 100%;
  padding: 10px;
  border: 1px solid #eee;
  border-radius: ${(props) => props.theme.borderRadius};
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
  font-size: ${(props) => props.theme.fonts.text};
  line-height: 1rem;
  font-weight: 300;
  @media screen and (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    p {
      font-size: ${(props) => props.theme.fonts.desktop};
    }
  }
`
export const ProductTitle = styled.p`
  font-weight: 400;
  font-size: ${(props) => props.theme.fonts.text};
  @media screen and (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    font-size: ${(props) => props.theme.fonts.desktop};
  }
`
export const Price = styled.p`
  font-weight: 800;
  text-align: left;
  padding-top: 13px;
  display: ${(props) => `${props.hidePrice ? 'none' : 'block'}`};
`
