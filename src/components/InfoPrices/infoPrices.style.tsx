import styled from "styled-components";

export const Container = styled.div`
  background: #ffffff;
  padding: 28px 20px;
`

export const LabelValue = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 1em;
`

export const Products = styled.div`
  font-family: 'Arial';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.269231px;
  color: #000000;
`

export const Shipping = styled.div`
  font-family: 'Helvetica Neue';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.269231px;

  color: #000000;


`

export const Discount = styled.div`
  font-family: 'Helvetica Neue';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;

  letter-spacing: 0.269231px;

  color: #9222DC;
`

export const SubTotal = styled.div`
  font-family: 'Helvetica Neue';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: 0.269231px;

  color: #000000;
`
type ButtonStyledProps = {
  black?: boolean;
}

export const Button = styled.button<ButtonStyledProps>`
  font-family: 'Arial';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 16px;
  display: flex;
  align-items: center;
  text-align: center;
  font-feature-settings: 'liga' off;
  color: #FFFFFF;
  justify-content: center;
  padding: 16px 8px;
  background:  ${props => props.black ? "#000000" : "#9222DC"};
  border-radius: 4px;
  width: 100%
`

export const ContainerButton = styled.div`
  display: flex; 
  align-items: center;
  justify-content: center;
  width: 100%
`