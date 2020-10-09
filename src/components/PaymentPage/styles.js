import styled from 'styled-components'

export const MainContainer = styled.div`
  height: 720px;
  width: 387px;
  font-family: 'Helvetica Neue';
`
export const Steps = styled.div`
  height: 20px;
  width: 386px;
`

export const RectangleSteps = styled.div`
  height: 72px;
  width: 384px;
  border-radius: 3px;
  background-color: #fff;
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 29, 0.22);
  margin-bottom: 680px;
  padding-top: 8px;
`
export const TextBag = styled.span`
  height: 16px;
  width: 61px;
  color: #ccc;
  font-family: 'Helvetica Neue';
  font-size: 13px;
  font-weight: 700;
  letter-spacing: NaNpx;
  line-height: 16px;
  text-align: center;
  margin: 44px 0px 12px 31px;
`

export const TextPayment = styled.span`
  height: 16px;
  width: 89px;
  color: #ff7800;
  font-family: 'Helvetica Neue';
  font-size: 13px;
  font-weight: 700;
  letter-spacing: NaNpx;
  line-height: 16px;
  text-align: center;
  margin: 44px 38px 12px 38px;
`

export const TextConfirm = styled.span`
  height: 16px;
  width: 101px;
  color: #ccc;
  font-family: 'Helvetica Neue';
  font-size: 13px;
  font-weight: 700;
  letter-spacing: NaNpx;
  line-height: 16px;
  text-align: center;
  margin: 44px 29px 12px 0px;
`
export const Background = styled.div`
  height: 720px;
  width: 360px;
`
export const RectangleBackground = styled.div`
  height: 100%;
  width: 385px;
  background-color: #eee;
  margin: 10px 13px 0px 0px;
`
export const ContainerForm = styled.div`
  height: 347px;
  width: 341px;

  margin: 10px 23px 323px 23px;
`
export const ContainerRectangleForm = styled.div`
  height: 325px;
  width: 341px;
  border-radius: 3px;
  background-color: #fff;
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 29, 0.22);
  display: flex;
  flex-direction: column;
  margin-top: 5px;
`
export const TextCreditCard = styled.div`
  height: 17px;
  width: 319px;
  color: #999;
  font-family: 'Helvetica Neue';
  font-size: 14px;
  font-weight: 700;
  letter-spacing: NaNpx;
  line-height: 17px;
  margin: 0px 11px 0px 11px;
  padding-top: 10px;
`
export const TextCardNumber = styled.p`
  height: 14px;
  width: 129.71px;
  color: #ccc;
  font-family: 'Helvetica Neue';
  font-size: 12px;
  font-weight: 700;
  letter-spacing: NaNpx;
  line-height: 14px;
`

export const TextUserName = styled.p`
  height: 14px;
  width: 262px;
  color: #ccc;
  font-family: 'Helvetica Neue';
  font-size: 12px;
  font-weight: 700;
  letter-spacing: NaNpx;
  line-height: 14px;
`
export const TextCardValidate = styled.p`
  height: 14px;
  width: 158px;
  color: #ccc;
  font-family: 'Helvetica Neue';
  font-size: 12px;
  font-weight: 700;
  letter-spacing: NaNpx;
  line-height: 14px;
`
export const TextCvv = styled.p`
  height: 14px;
  width: 138px;
  color: #ccc;
  font-family: 'Helvetica Neue';
  font-size: 12px;
  font-weight: 700;
  letter-spacing: NaNpx;
  line-height: 14px;
`
export const Input1 = styled.input`
  box-sizing: border-box;
  height: 45px;
  width: 320px;
  border-radius: 3px;
  background-color: #fff;
  border: 1px solid #e7e7e7;
  box-shadow: inset 0 1px 2px 0 rgba(0, 0, 0, 0.2);
  &::placeholder {
    height: 19px;
    width: 219px;
    color: #e0e7ee;
    font-family: 'Helvetica Neue';
    font-size: 16px;
    letter-spacing: 1.37px;
    line-height: 19px;
  }
  &:focus {
    border: 2px solid #a43287;
    outline: none;
    box-shadow: none;
  }
  &:invalid {
    border: 1px solid red;
  }
`
export const Input2 = styled.input`
  box-sizing: border-box;
  height: 45px;
  width: 320px;
  border-radius: 3px;
  background-color: #fff;
  border: 1px solid #e7e7e7;
  box-shadow: inset 0 1px 2px 0 rgba(0, 0, 0, 0.2);
  &::placeholder {
    height: 19px;
    width: 219px;
    color: #e0e7ee;
    font-family: 'Helvetica Neue';
    font-size: 16px;
    letter-spacing: NaNpx;
    line-height: 19px;
  }
  &:focus {
    border: 1px solid #a43287;
    outline: none;
    box-shadow: none;
  }
  &:invalid {
    border: 1px solid red;
  }
`
export const Input3 = styled.input`
  box-sizing: border-box;
  height: 45px;
  width: 160px;
  border-radius: 3px;
  background-color: #fff;
  border: 1px solid #e7e7e7;
  box-shadow: inset 0 1px 2px 0 rgba(0, 0, 0, 0.2);
  &::placeholder {
    height: 19px;
    width: 133px;
    color: #e0e7ee;
    font-family: 'Helvetica Neue';
    font-size: 16px;
    letter-spacing: 1.37px;
    line-height: 19px;
  }
  &:focus {
    border: 1px solid #a43287;
    outline: none;
    box-shadow: none;
  }
  &:invalid {
    border: 1px solid red;
  }
`
export const Input4 = styled.input`
  box-sizing: border-box;
  height: 45px;
  width: 140px;
  border-radius: 3px;
  background-color: #fff;
  border: 1px solid #e7e7e7;
  box-shadow: inset 0 1px 2px 0 rgba(0, 0, 0, 0.2);
  &::placeholder {
    height: 19px;
    width: 133px;
    color: #e0e7ee;
    font-family: 'Helvetica Neue';
    font-size: 16px;
    letter-spacing: 1.37px;
    line-height: 19px;
  }
  &:focus {
    border: 1px solid #a43287;
    outline: none;
    box-shadow: none;
  }
  &:invalid {
    border: 1px solid red;
  }
`
export const ContainerCardNumber = styled.div`
  margin-left: 10px;
`
export const ContainerUserName = styled.div`
  margin-left: 10px;
`

export const ContainerValidate = styled.div`
  display: flex;
  justify-content: space-around;
`
export const Total = styled.div`
  box-sizing: border-box;
  height: 129px;
  width: 341px;
  border-radius: 3px;
  border: 1px solid #ccc;
  margin: 20px 23px 20px 0px;
`
export const Container1 = styled.div`
  margin-top: 15px;
  display: flex;
`
export const Container2 = styled.div`
  margin-top: 9px;
  display: flex;
`
export const Container3 = styled.div`
  margin-top: 8px;
  display: flex;
`
export const Container4 = styled.div`
  margin-top: 16px;
  display: flex;
`

export const TextTotalProducts = styled.span`
  height: 17px;
  width: 124px;
  color: #212122;
  font-family: 'Helvetica Neue';
  font-size: 14px;
  letter-spacing: NaNpx;
  line-height: 17px;
  margin-right: 66px;
  margin-left: 14px;
`
export const TextPriceProducts = styled.span`
  height: 17px;
  width: 124px;
  color: #212122;
  font-family: 'Helvetica Neue';
  font-size: 14px;
  letter-spacing: NaNpx;
  line-height: 17px;
  text-align: right;
`

export const TextShipment = styled.span`
  height: 17px;
  width: 124px;
  color: #212122;
  font-family: 'Helvetica Neue';
  font-size: 14px;
  letter-spacing: NaNpx;
  line-height: 17px;
  margin-right: 66px;
  margin-left: 14px;
`
export const TextPriceShipment = styled.span`
  height: 17px;
  width: 124px;
  color: #212122;
  font-family: 'Helvetica Neue';
  font-size: 14px;
  letter-spacing: NaNpx;
  line-height: 17px;
  text-align: right;
`
export const TextDiscount = styled.span`
  height: 17px;
  width: 124px;
  color: #ff7800;
  font-family: 'Helvetica Neue';
  font-size: 14px;
  letter-spacing: NaNpx;
  line-height: 17px;
  margin-right: 66px;
  margin-left: 14px;
`
export const TextPriceDiscount = styled.span`
  height: 17px;
  width: 124px;
  color: #ff7800;
  font-family: 'Helvetica Neue';
  font-size: 14px;
  letter-spacing: NaNpx;
  line-height: 17px;
  text-align: right;
`

export const TextTotal = styled.span`
  height: 17px;
  width: 124px;
  color: #212122;
  font-family: 'Helvetica Neue';
  font-size: 14px;
  font-weight: 700;
  letter-spacing: NaNpx;
  line-height: 17px;
  margin-right: 66px;
  margin-left: 14px;
`

export const TextPriceTotal = styled.span`
  height: 17px;
  width: 124px;
  color: #212122;
  font-family: 'Helvetica Neue';
  font-size: 14px;
  font-weight: 700;
  letter-spacing: NaNpx;
  line-height: 17px;
  text-align: right;
`
export const Button = styled.button`
  height: 60px;
  width: 341px;
  border-radius: 3px;
  background-color: #ff6c00;
  box-shadow: inset 0 -3px 0 0 #d45a00, 0 2px 4px 0 rgba(0, 0, 0, 0.25);
  &:hover {
    transition-duration: 300ms;
    background-color: #d45a00;
  }
  &:checked {
    transition-duration: 300ms;
    background-color: #d45a00;
  }
  cursor: pointer;
  outline: none;
  box-shadow: none;
  border: none;
  &:focus {
    outline: none;
    box-shadow: none;
  }
`

export const TextFinish = styled.div`
  height: 24px;
  width: 339px;
  color: #fff;
  font-family: 'Helvetica Neue';
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0.5px;
  line-height: 24px;
  text-align: center;
`
