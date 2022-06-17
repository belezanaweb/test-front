import styled from 'styled-components'

export const SuccessMessage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 12px 0 10px;

  p {
    color: #ff7800;
    text-transform: uppercase;
    font-weight: 800;
    font-size: 0.81rem;
  }

  div {
    border: 2px solid #ff7800;
    border-radius: 50%;
    width: 39px;
    height: 39px;
    margin-bottom: 11px;
    display: flex;
    justify-content: center;
    align-items: center;

    div {
      width: 19px;
      height: 10px;
      transform: rotate(-45deg);
      border-radius: 0;
      border-bottom: 2px solid #ff7800;
      border-left: 2px solid #ff7800;
      border-top: 0;
      border-right: 0;
      position: relative;
      top: 2.5px;
    }
  }

  @media (min-width: 1024px) {
    p {
      font-size: 1.2rem;
    }

    div {
      width: 50px;
      height: 50px;

      div {
        width: 25px;
        height: 12px;
      }
    }
  }
`

export const SectionContainer = styled.section`
  width: 100%;
  margin-bottom: -5px;

  @media (min-width: 1024px) {
    width: 48%;
  }
`

export const Container = styled.main`
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
  padding: 10px;
`
