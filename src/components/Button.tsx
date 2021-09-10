import React from 'react'
import { useHistory } from 'react-router-dom'

import { styled, keyframes } from '@/style/stitches.config'

const onHover = keyframes({
  '0%': { backgroundColor: '$orange100' },
  '100%': { backgroundColor: '$orange300' }
})

const ButtonStyled = styled('button', {
  backgroundColor: '$orange100',
  width: '-webkit-fill-available',
  color: 'white',
  fontSize: 20,
  fontWeight: 'bold',
  textTransform: 'uppercase',
  marginX: '10px',
  marginY: '5px',
  paddingY: '15px',
  paddingX: '15px',
  border: 'none',
  borderBottom: '4px solid $orange300',
  borderRadius: '3px',
  '&:hover': {
    animation: `${onHover} 300ms`,
    backgroundColor: '$orange300'
  }
})

interface OwnProps {
  text: string
  href?: string
  isSubmit?: boolean
}

const Box = (props: OwnProps): React.ReactElement => {
  const { text, href, isSubmit = false } = props

  const history = useHistory()

  const onClick = (): void => {
    if (href) {
      history.push(href)
    }
  }

  if (isSubmit) {
    return (
      <div>
        <ButtonStyled type="submit" data-testid="button">
          {text}
        </ButtonStyled>
      </div>
    )
  }

  return (
    <ButtonStyled onClick={href ? onClick : undefined} data-testid="button">
      {text}
    </ButtonStyled>
  )
}

export default Box
