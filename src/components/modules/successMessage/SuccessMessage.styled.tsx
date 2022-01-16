import styled from 'styled-components'

export const StyledSuccessMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;

  font-size: 0.875rem;
  font-weight: 700;
  line-height: 1.0625rem;
  color: ${({ theme }) => theme.color.text.successMessage};

  text-transform: uppercase;
`

export const StyledIconContainer = styled.span`
  position: relative;
  width: 2.5rem;
  height: 2.5rem;
  border: 2px solid;
  border-radius: 50%;

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 1.25rem;
    transform: translate(-50%, -50%);
  }
`
