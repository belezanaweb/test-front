import styled, { keyframes } from 'styled-components'

const skeleton = keyframes`
  from {
    background-position: 0px;
  }
  to {
    background-position: -200%;
  }
`

export const Wrapper = styled.div`
  display: grid;

  .img {
    display: block;
    max-width: 100%;
    grid-area: 1/1;
    opacity: 0;
    transition: 0.2s;
  }

  .skeleton {
    grid-area: 1/1;
    height: 100%;
    background-image: linear-gradient(90deg, #eee 0px, #fff 50%, #eee 100%);
    background-color: #eee;
    background-size: 200%;
    animation: ${skeleton} 1.5s infinite linear;
  }
`

const motion = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const RollerSpinner = styled.div`
  display: inline-block;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 50%;
  top: 50%;

  div {
    animation: ${motion} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    transform-origin: 32px 32px;
  }
  div:after {
    content: ' ';
    display: block;
    position: absolute;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${(p) => p.color};
    margin: -3px 0 0 -3px;
  }
  div:nth-child(1) {
    animation-delay: -0.036s;
  }
  div:nth-child(1):after {
    top: 50px;
    left: 50px;
  }
  div:nth-child(2) {
    animation-delay: -0.072s;
  }
  div:nth-child(2):after {
    top: 54px;
    left: 45px;
  }
  div:nth-child(3) {
    animation-delay: -0.108s;
  }
  div:nth-child(3):after {
    top: 57px;
    left: 39px;
  }
  div:nth-child(4) {
    animation-delay: -0.144s;
  }
  div:nth-child(4):after {
    top: 58px;
    left: 32px;
  }
  div:nth-child(5) {
    animation-delay: -0.18s;
  }
  div:nth-child(5):after {
    top: 57px;
    left: 25px;
  }
  div:nth-child(6) {
    animation-delay: -0.216s;
  }
  div:nth-child(6):after {
    top: 54px;
    left: 19px;
  }
  div:nth-child(7) {
    animation-delay: -0.252s;
  }
  div:nth-child(7):after {
    top: 50px;
    left: 14px;
  }
  div:nth-child(8) {
    animation-delay: -0.288s;
  }
  div:nth-child(8):after {
    top: 45px;
    left: 10px;
  }
`
