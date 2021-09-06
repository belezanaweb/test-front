import styled from 'styled-components'

export const Container = styled.div`
  h3 {
    color: #999;
    font-size: 14px;
    line-height: 17px;
    margin-bottom: 5px;
    padding-left: 15px;
  }
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 15px;
  background-color: var(--content);
  border-radius: 3px;
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 29, 0.22);

  .inline {
    display: flex;
    justify-content: space-between;
    gap: 20px;

    div {
      flex: 1;
    }
  }
`
