import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 60px;

  .sideBar {
    background: #fff;
    padding: 10px;
    height: 100%;
    border-radius: 4px;
    margin-top: 65px;
    box-shadow: rgb(222, 218, 218) 0px 1px 2px 0px;
  }

  @media (max-width: 600px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 360px;
    margin: auto;
    border-radius: 2px;

    .sideBar {
      background: none;
      padding: 0;
      height: 0;
      border-radius: 0;
      margin-top: 0;
      box-shadow: none;
    }
  }
`
