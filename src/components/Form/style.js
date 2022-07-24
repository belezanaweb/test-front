import styled from 'styled-components'

export const Section = styled.section`
  width: 100%;
`

export const Container = styled.section`
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: ${(props) => props.theme.shadow};
  padding: 13px;
  border-radius: ${(props) => props.theme.borderRadius};
  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 25px;
    color: ${(props) => props.theme.colors.lightGray};
    font-size: ${(props) => props.theme.fonts.label};
    span {
      margin-bottom: 7px;
    }
    p {
      color: ${(props) => props.theme.colors.red};
      padding-top: 5px;
    }
    @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
      p {
        font-size: ${(props) => props.theme.fonts.desktop};
      }
    }
  }
  @media screen and (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    label {
      font-size: ${(props) => props.theme.fonts.desktop};
    }
  }
`

export const ContainerTwoCols = styled.div`
  display: flex;
  width: 100%;
  label {
    width: 45%;
  }
  label:nth-child(1) {
    width: 53%;
    margin-right: 20px;
  }
`

export const Input = styled.input`
  width: 100%;
  padding: 15px;
  border: 1px solid ${(props) => props.theme.colors.mediumGray};
  border-radius: ${(props) => props.theme.borderRadius};
  box-shadow: ${(props) => props.theme.shadow};
  &:focus {
    outline: ${(props) =>
      `${
        props.error
          ? '1px solid ' + props.theme.colors.red
          : '1px solid ' + props.theme.colors.purple
      }`};
  }
  &::placeholder {
    color: ${(props) => props.theme.colors.ultraLightGray};
    font-size: ${(props) => props.theme.fonts.desktop};
    letter-spacing: 1.37px;
  }
`
