import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  background: #eee;
  border-radius: 2px;
  margin-top: 60px;

  .formContainer {
    width: 100%;
    background: #fff;
    border-radius: 4px;
    margin-right: 20px;
    margin-top: 15px;
  }

  .sideBar {
    background: #fff;
    padding: 10px;
    height: 100%;
    border-radius: 4px;
    margin-top: 15px;
    box-shadow: rgb(222, 218, 218) 0px 1px 2px 0px;
  }

  @media (max-width: 600px) {
    .formContainer {
      width: unset;
      background: none;
      border-radius: 0;
      margin-right: 0;
      margin-top: 0;
    }

    .sideBar {
      background: none;
      padding: 0;
      height: 0;
      border-radius: 0;
      margin-top: 0;
      box-shadow: none;
    }

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 360px;
    margin: auto;
    background: #eee;
    border-radius: 2px;
  }
`

export const FormToPay = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  background: #fff;
  width: 340px;
  padding: 10px;

  .validityAndPassword {
    display: flex;

    .validity {
      margin-right: 10px;
    }
  }

  label {
    margin-bottom: 5px;
    font-size: 12px;
    color: #ccc;
  }

  @media (max-width: 600px) {
    display: flex;
    align-items: start;
    flex-direction: column;
    background: #fff;
    width: 340px;
    padding: 10px;

    .validityAndPassword {
      display: flex;

      .validity {
        margin-right: 10px;
      }
    }

    label {
      margin-bottom: 5px;
      font-size: 12px;
      color: #ccc;
    }
  }
`
