import { Paper, styled, Tab } from "@mui/material";

export const TabBag = styled(Tab, {})({
  fontFamily: 'Arial',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '14px',
  lineHeight: '24px',
  color: 'color: #878787',
  borderBottom: '1px solid #878787',
  "&.Mui-selected": {
    color: '#000000',
    borderBottom: '4px solid #000000'
  },
  tabpanel: {
    marginLeft: "auto",
    marginRight: "auto"
  }
})

export const ContainerTabs = styled(Paper, {}) ({
  backgroundColor: '#FFFFFFF',
  display: 'flex',
  justifyContent: 'center',
})

export const ContainerShoppingBag = styled(Paper, {}) ({
  background: '#F5F5F5',
})