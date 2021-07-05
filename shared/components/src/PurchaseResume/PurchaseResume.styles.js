import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  padding: 3px 0;
  margin-bottom: 20px;

  border-radius: 3px;
  border-spacing: 12px 9px;
  border: 1px solid #ccc;
`;

export const TD = styled.td`
  color: ${(props) => (props.discount ? "#FF7800" : "#212122")};
  text-transform: uppercase;
  text-align: right;
  line-height: 17px;
`;

export const TH = styled.th`
  color: ${(props) => (props.discount ? "#FF7800" : "#212122")};
  font-weight: normal;
  text-transform: uppercase;
  text-align: left;
  line-height: 17px;
`;

export const TFOOT = styled.tfoot`
  th,
  td {
    padding-top: 5px;
  }
`;
