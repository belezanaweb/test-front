import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

export const Footer = styled.footer`
  background-color: #ffffff;
  padding: 1.75rem 1.25rem;
`

const button = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 8px;
  background: #9222dc;
  border-radius: 4px;
  color: #ffffff;
  font-size: 1rem;
  font-weight: 700;
  text-decoration: none;
`

export const LinkButton = styled(Link)`
  ${button}
`

export const SubmitButton = styled.button`
  ${button}
  border: none;
  outline: none;
  width: 100%;
  cursor: pointer;
`
