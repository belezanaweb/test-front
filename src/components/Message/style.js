import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  margin-bottom: 10px;
  .icon {
    display: flex;
    justify-content: center;
    .circle {
      border: 2px solid;
      border-color: ${(props) => props.theme.colors.orange};
      border-radius: 50%;
      width: 39px;
      height: 39px;
      margin-bottom: 11px;
      display: flex;
      justify-content: center;
      align-items: center;
      .check {
        width: 19px;
        height: 10px;
        transform: rotate(-45deg);
        border-radius: 0;
        border-bottom: 2px solid #ff7800;
        border-left: 2px solid #ff7800;
        border-top: 0;
        border-right: 0;
        position: relative;
        top: -3px;
      }
    }
  }
  p {
    color: #ff7800;
    text-transform: uppercase;
    font-weight: 800;
    ${(props) => props.theme.fonts.title};
    text-align: center;
    @media screen and (min-width: ${(props) => props.theme.breakpoints.desktop}) {
      font-size: ${(props) => props.theme.fonts.desktop};
    }
  }
`
