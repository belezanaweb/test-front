import styled from 'styled-components'

export const Container = styled.div`
  @media (min-width: 1000px) {
    display: flex;
    flex-direction: column;
  }
`

export const FormWrapper = styled.div`
  @media (min-width: 1000px) {
    margin: 5%;
  }
`

export const ContainerWrapper = styled.div`
  /* padding: 0 5%; */
  @media (min-width: 1000px) {
    height: 40rem;
    padding: 5%;
    width: 50%;
  }
`
export const InputWrapper = styled.div`
  /* padding: 0 5%; */
  &:first-child {
    margin-right: 5%;
  }
`

export const ProductWrapper = styled.div`
  @media (min-width: 1000px) {
    margin: 0 5%;
  }
`
