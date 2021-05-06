import styled from "styled-components";

export const Tamplate = styled.div``;

export const ProductsList = styled.div`
  > div + div {
    margin-top: 15px;
  }
`;

export const Summary = styled.div`
  box-sizing: border-box;
  width: 100%;
  border-radius: 3px;
  border: 1px solid #ccc;
  padding: 14px 15px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;

  > div + div {
    margin-top: 8px;
  }

  > div:last-child {
    margin-top: 16px;
  }
`;

export const Content = styled.div`
  flex: 1;
  padding: 1rem;

  > div + div,
  > div + button {
    margin-top: 2rem;
  }
`;

export const AppBar = styled.div`
  height: 45px;
  width: 100%;
  border-radius: 3px;
  background-color: #fff;
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 29, 0.22);
  display: flex;
  flex-direction: row;
`;

export const Tabs = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TabItem = styled.a`
  flex: 1;
  color: #ff7800;
  font-family: "Helvetica Neue";
  font-size: 13px;
  font-weight: 700;
  line-height: 16px;
  text-align: center;
`;
