import styled from 'styled-components'

export const Container = styled.div`
  h3 {
    color: #999;
    font-size: 0.875rem;
    line-height: 17px;
    margin-bottom: 5px;
    padding-left: 15px;
  }

  .img {
    display: flex;
    justify-content: center;
    margin: 5px 0 20px;
  }
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  background-color: var(--content);
  border-radius: var(--border-radius);
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 29, 0.22);
  margin-bottom: 15px;

  span {
    display: block;
    line-height: 17px;
    font-size: 0.875rem;
    color: #000;
  }

  @media (min-width: 600px) {
    & {
      width: 49%;
    }
  }

  @media (min-width: 1000px) {
    & {
      width: 33%;
    }
  }
`
