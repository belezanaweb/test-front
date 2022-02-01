import styled from 'styled-components'

export const Container = styled.div`
  margin-bottom: 20px;
`
export const ImageCheck = styled.img`
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
`
export const Message = styled.h3`
  font-size: 16px;
  color: #ff7800;
  font-weight: 700;
  line-height: 17px;
  text-align: center;
  @media screen and (max-width: 1023px) {
    font-size: 14px;
  }
`

export const ImageContainer = styled.div`
  position: relative;
  display: block;
  width: 40px;
  height: 40px;
  margin: 0 auto 11px;
`
export const ImageCircle = styled.img`
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
`
