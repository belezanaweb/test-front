import React from 'react'

export type HeaderProps = React.HTMLAttributes<HTMLElement>

export const Header = (props: HeaderProps) => {
  return (
    <header
      className="mb-5 flex flex-col items-center justify-center bg-white shadow-sm"
      {...props}
    />
  )
}
