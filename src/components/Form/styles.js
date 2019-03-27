import styled from 'styled-components';

export const Container = styled.div`

  font-family: "Helvetica";
  display: flex;
  flex-direction: column;

  form{
    padding: 12px 10px 25px 10px;
    background-color: #fff;
  }

  .row{
    /* width: 100%; */
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;

    &:last-child{
      margin-bottom: 0;
    }
  }

  .col{
    display: flex;
    flex-direction: column;
    width: 100%;

    &.w-160{
      width: 160px;
    }

    &.w-145{
      width: 145px;
    }
  }

  label{
    color: #ccc;
    font-size: 12px;
    font-weight: 700;
    line-height: 14px;
    margin-bottom: 5px;
  }

  input{
    height: 45px;
    border-radius: 3px;
    background-color: #fff;
    border: 1px solid #e7e7e7;
    box-shadow: inset 0 1px 2px 0 rgba(0,0,0,0.2);
    padding-left: 13px;
    color: #212121;
    font-size: 16px;
    line-height: 19px;

    &::placeholder{
      color: #e0e7ee;
      font-size: 16px;
      line-height: 19px;
    }

    &:focus{
      border: 1px solid #a43287;
      outline: none;
    }

    &.erro{
      border: 1px solid #F30;
      outline: none;
      margin-top: -1px;
      font-size: 16px;
    }
  }

  .erro{
      color: #f30;
      font-size: 12px;
      line-height: 14px;
      margin-top: 3px;
      /* margin-bottom: 25px; */
    }



`
