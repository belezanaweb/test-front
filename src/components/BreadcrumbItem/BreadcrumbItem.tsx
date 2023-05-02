import { PropsWithChildren } from 'react'

interface BreadcrumbItemProps {
  isActive: boolean;
  onClick?: () => void;
}

const BreadcrumbItem = ({
  children,
  isActive,
  onClick = () => {}
}: PropsWithChildren<BreadcrumbItemProps>) => {
  const activeClasses = isActive ? 'border-b-4 border-black text-neutral-950' : ''
  return (
    <li
      onClick={onClick}
      className={`leading-none text-sm px-3 pb-2 pt-3 block h-full text-neutral-500 ${activeClasses}`}
    >
      {children}
    </li>
  )
}

export default BreadcrumbItem
