import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  margin-bottom: 10px;
  padding: 12px 24px;

  border-radius: 3px;
  background-color: #fff;
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 29, 0.22);
`;

export const UL = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  list-style: none;
  padding: 0;
`;

export const LI = styled.li`
  font-size: 0.92rem;
  font-weight: 700;
  text-transform: uppercase;
  color: ${(props) => (props.active ? "#ff7800" : "#ccc")};

  line-height: 17px;
`;
