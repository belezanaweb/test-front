import styled from "styled-components";

export const Wrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  border-radius: 3px;
  border: 1px solid #eee;
  display: flex;
  flex-wrap: nowrap;
  padding: 10px;
`;

export const Image = styled.div`
  height: 65px;
  width: 65px;
  background: #000;
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Price = styled.div`
  color: #212122;
  font-family: "Helvetica Neue";
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  text-align: right;
`;
