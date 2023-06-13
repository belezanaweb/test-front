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
  border-radius: 4px;
  color: #ffffff;
  font-size: 1rem;
  font-weight: 700;
  text-decoration: none;
`

export const LinkButton = styled(Link)<{$variant?: string}>`
  ${button}
  background-color: ${(props) => props.$variant === "secondary" ? "#000000" : "#9222dc"}
`

export const SubmitButton = styled.button<{$variant?: string}>`
  ${button}
  border: none;
  outline: none;
  width: 100%;
  cursor: pointer;
  background-color: ${(props) => props.$variant === "secondary" ? "#000000" : "#9222dc"}
`
