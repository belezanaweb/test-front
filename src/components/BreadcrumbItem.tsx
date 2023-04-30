import { PropsWithChildren } from 'react'

const BreadcrumbItem = ({ children, isActive }: PropsWithChildren<{ isActive: boolean }>) => {
  const activeClasses = isActive ? 'border-b-4 border-black text-neutral-950' : ''
  return (
    <li
      className={`leading-none text-sm px-3 pb-2 pt-3 block h-full text-neutral-500 ${activeClasses}`}
    >
      {children}
    </li>
  )
}

export default BreadcrumbItem
