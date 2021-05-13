import styled from 'styled-components'
import px2vw from '../../utils/px2vw'

export const Container = styled.div`
  background-color: #fff;
  width: 100%;
  max-height: 72px;

  height: ${px2vw(120)};

  @media (min-width: 768px) {
    height: ${px2vw(95)};
  }

  @media (min-width: 1024px) {
    height: ${px2vw(72)};
  }

  display: flex;

  justify-content: space-between;
  align-items: center;
`
