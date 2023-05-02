import React from 'react'

export type HeaderProps = React.HTMLAttributes<HTMLElement>

export const Header = (props: HeaderProps) => {
  return (
    <header
      className="flex flex-col items-center justify-center bg-white shadow-sm mb-5"
      {...props}
    />
  )
}
