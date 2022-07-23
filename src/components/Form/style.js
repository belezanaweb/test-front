import styled from 'styled-components'

export const Section = styled.section`
  width: 100%;
`

export const Container = styled.section`
  background-color: #fff;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  padding: 13px;
  border-radius: 3px;
  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 25px;
    color: #ccc;
    font-size: 0.8rem;
    span {
      margin-bottom: 7px;
    }
    p {
      color: #f30;
      font-size: 0.8rem;
      padding-top: 5px;
    }
    @media (min-width: 1024px) {
      p {
        font-size: 1rem;
      }
    }
  }
  @media screen and (min-width: 1024px) {
    label {
      font-size: 1rem;
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
  border: 1px solid #e7e7e7;
  border-radius: 3px;
  box-shadow: 1px 0 2px rgba(0, 0, 0, 0.2);
  &:focus {
    outline: ${(props) => `${props.error ? '1px solid #f30' : '1px solid #a43287'}`};
  }
  &::placeholder {
    color: #e0e7ee;
    font-size: 1rem;
    letter-spacing: 1.37px;
  }
`
