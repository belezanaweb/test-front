import { PropsWithChildren } from 'react'

function GenericPage({ children }: PropsWithChildren) {
  return <main className="flex flex-col items-center">{children}</main>
}

export default GenericPage
