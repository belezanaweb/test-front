import { PropsWithChildren } from 'react'

function Header({ children }: PropsWithChildren) {
  return <header className="bg-white shadow-md justify-center px-5">{children}</header>
}

export default Header
