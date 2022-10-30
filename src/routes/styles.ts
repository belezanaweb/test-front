import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { ShadowPaper } from "../components/ShadowPaper/styles";
import { colors } from "../styles/style-config";

export const Container = styled.div`
  background: ${colors.backgroundColorDark};
  padding: 10px;
`;

export const Tabs = styled(ShadowPaper)`
  border-radius: 0;
  justify-content: center;
  justify-content: space-between;
`;

export const Link = styled(NavLink)`
  color: ${({ selected }: { selected: boolean }) =>
    selected ? colors.highLightColor : colors.inputLabelColor};
  text-decoration: none;
  font-weight: 700;
  line-height: 16px;
`;
