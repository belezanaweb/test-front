import React from 'react'

type Props = {
  children: JSX.Element | JSX.Element[]
}

function Container({ children }: Props) {
  return <main>{children}</main>
}

export default Container
