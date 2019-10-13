import styled from 'styled-components'
import theme from '../../theme'

export const StyledHeader = styled.header`
    box-shadow: ${theme.boxShadow};
    display: flex;
    justify-content: space-between;
    padding: 0.9231rem 1.308rem;
    background-color: ${theme.bgColor};

    > a {
      line-height: 1.231rem;
      font-weight: ${theme.fontWeightBold};
      text-transform: uppercase;
      text-decoration: none;
      color: ${theme.inactiveColor};
      transition: color ${theme.transition};

      &.active {
        color: ${theme.primary};
      }
    }

`
