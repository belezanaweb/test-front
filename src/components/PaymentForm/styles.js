import styled from 'styled-components'

export const SectionContainer = styled.section`
  width: 100%;
  margin-bottom: 20px;

  @media (min-width: 1024px) {
    width: 48%;
  }
`

export const InnerContainer = styled.section`
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

    input {
      padding: 15px;
      border: 1px solid #e7e7e7;
      border-radius: 3px;
      max-width: 320px;
      box-shadow: 1px 0 2px rgba(0, 0, 0, 0.2);

      &:focus {
        border: inherit;
      }

      &::placeholder {
        color: #e0e7ee;
        font-size: 1rem;
        letter-spacing: 1.37px;
      }
    }
  }

  @media screen and (min-width: 1024px) {
    label {
      font-size: 1rem;
    }
  }
`

export const DateCVVContainer = styled.div`
  display: flex;
  width: 100%;

  label {
    width: 40%;
  }

  label:nth-child(1) {
    width: 53%;
    margin-right: 20px;
  }
`
