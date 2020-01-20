import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  justify-content: space-around;
  box-shadow: none;
  background: none;
  width: 100%;
  max-width: 760px;
  margin: auto;
  align-items: center;
  padding: 0px 20px;
  position: relative;
  top: 37px;
  border-radius: 4px 4px 0px 0px;

  &::before {
    position: absolute;
    z-index: -1;
    content: '';
    width: 68%;
    display: flex;
    justify-content: center;
    height: 4px;
    top: 27px;
    background: linear-gradient(
      to right,
      rgb(164, 50, 135) 0%,
      rgb(164, 50, 135) 65%,
      rgb(164, 50, 135) 66%,
      rgb(164, 50, 135) 100%
    );
  }

  div {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    box-shadow: rgb(189, 188, 188) 0px 2px 2px;
    background: #eeeeee;

    svg {
      width: 29px;
      height: 29px;
      border-radius: 50%;
      margin: 10px 10px;
      color: #a43287;
    }

    p {
      text-transform: uppercase;
      font-weight: bold;
      font-size: 0.625rem;
      color: #a43287;
      text-align: center;
      margin-top: 2px;
      width: 100px;
      position: relative;
      left: -25px;
    }
  }

  @media (max-width: 600px) {
    display: flex;
    width: 360px;
    height: 37px;
    margin: auto;
    background: #fff;
    justify-content: space-around;
    align-items: center;
    padding: 0px 20px;
    position: relative;
    top: 37px;
    border-radius: 4px 4px 0px 0px;
    box-shadow: 0px 2px 5px 1px rgba(194, 194, 194, 0.29);

    div {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      box-shadow: none;
      background: none;

      .icon {
        display: none;
      }

      p {
        text-transform: uppercase;
        font-weight: bold;
        font-size: 13px;
        text-align: center;
        margin-top: 18px;
        width: 100%;
        color: #ff7800;
      }
    }
  }
`
