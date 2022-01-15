import React from 'react'

import { StyledPageTitle } from './PageTitle.styled'

type PageTitleProps = {
  text: string
}

function PageTitle({ text, ...props }: PageTitleProps): JSX.Element {
  return <StyledPageTitle {...props}>{text}</StyledPageTitle>
}

export default PageTitle
