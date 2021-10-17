import styled from 'styled-components'

const TitleWrapper = styled.div`
  .title {
    color: var(--grey-200);
    font-size: 0.87rem;
    line-height: 1.7rem;
    text-transform: uppercase;
    flex-grow: initial !important;
    min-height: 2.7rem;   
    margin-left: 0.68rem;
    margin-top: 0.68rem;
    font-weight: bold;
  }
  .title-success {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-bottom: 1.25rem;

      text-transform: uppercase;
      color: var(--orange-150);
      font-size: 0.87rem;
      font-weight: bold;
  }
`

export default TitleWrapper
