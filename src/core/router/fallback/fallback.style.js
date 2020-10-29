import styled, { keyframes } from 'styled-components'

const animationKeyframe = keyframes`
  0% {
    background-position: -468px 0
  }
  100% {
    background-position: 468px 0
  }
}
`

const Animation = styled.div`
  animation-duration: 1.25s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: ${animationKeyframe};
  animation-timing-function: linear;
  background: #f6f6f6;
  background: linear-gradient(to right, #f6f6f6 8%, #eaeaea 18%, #f6f6f6 33%);
  background-size: 800px 104px;
  position: relative;
`

const Title = styled(Animation)`
  margin: 5px 0px 5px 10px;
  height: 17px;
  width: 80px;
`

const Box = styled(Animation)`
  width: 100%;
  height: 300px;
`

export { Title, Box }
