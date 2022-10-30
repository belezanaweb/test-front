import { CircularProgress } from "@mui/material";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { ShadowPaper } from "../components/ShadowPaper/styles";
import { colors } from "../styles/style-config";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  background: ${colors.backgroundColorDark};
  padding: 10px;
  min-height: 700px;
`;

export const Tabs = styled(ShadowPaper)`
  border-radius: 0;
  justify-content: center;
  justify-content: space-around;
`;

export const Link = styled(NavLink)`
  color: ${({ selected }: { selected: boolean }) =>
    selected ? colors.highLightColor : colors.inputLabelColor};
  text-decoration: none;
  font-weight: 700;
  font-size: 13px;
  line-height: 16px;
`;

export const Loading = styled(CircularProgress)`
  color: ${colors.highLightColor} !important;
`;
