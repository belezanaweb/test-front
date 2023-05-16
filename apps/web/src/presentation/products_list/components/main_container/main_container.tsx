import { ReactNode } from 'react'

type MainContainerProps = {
  children: ReactNode,
  dataTestId: string
}

export default function MainContainer({ children, dataTestId }: MainContainerProps) {
  return (
    <div data-testid={dataTestId} className="flex flex-col md:container md:mx-auto md:h-screen">
      {children}
    </div>
  )
}
