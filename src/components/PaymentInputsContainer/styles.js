import styled from 'styled-components'

export const Container = styled.div`
  .labelCard {
    margin-left: 0px;
  }

  .cardIcons {
    width: 36%;
    height: 35%;
    position: absolute;
    margin-left: 320px;
  }

  .invalidField {
    border: 1px solid #f30 !important;
  }

  span {
    color: #f30;
    font-size: 12px;
    position: relative;
    top: -20px;
    display: block;
  }

  @media (min-width: 1400px) {
    .cardIcons {
      width: 25%;
      height: 20%;
      position: absolute;
      margin-left: 320px;
    }
  }

  @media (max-width: 600px) {
    .labelCard {
      margin-left: -23px;
    }

    .cardIcons {
      width: auto;
      height: auto;
      margin-left: 0;
      position: relative;
      left: 295px;
    }

    .invalidField {
      border: 1px solid #f30 !important;
    }

    span {
      color: #f30;
      font-size: 12px;
      position: relative;
      top: -20px;
      display: block;
    }
  }
`

export const FormToPay = styled.form`
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

export const Input = styled.input`
  color: #212121;
  width: 100%;
  height: 45px;
  margin-bottom: 20px;
  border: 1px solid rgba(0, 0, 0, 0.16);
  padding: 5px 10px;
  font-size: 16px;
  border-radius: 3px;
  background-image: -webkit-linear-gradient(
    top,
    rgba(0, 0, 0, 0.02) 0%,
    rgba(255, 255, 255, 0.02) 50%
  );
  background-image: -moz-linear-gradient(
    top,
    rgba(0, 0, 0, 0.02) 0%,
    rgba(255, 255, 255, 0.02) 50%
  );
  background-image: linear-gradient(top, rgba(0, 0, 0, 0.02) 0%, rgba(255, 255, 255, 0.02) 50%);
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);

  ::placeholder {
    color: #e0e7ee;
  }

  &:focus {
    border: 1px solid #a43287;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1) !important;
  }
`
