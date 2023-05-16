import { ReactNode } from 'react'

type MainContainerProps = {
  children: ReactNode
}

export default function MainContainer({ children }: MainContainerProps) {
  return (
    <div className="flex flex-col md:mx-auto md:container md:h-screen">
      {children}
    </div>
  )
}
