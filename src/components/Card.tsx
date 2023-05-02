import { PropsWithChildren } from 'react'

function Card({ children }: PropsWithChildren) {
  return (
    <section className="rounded m-5 p-2 pb-4 w-[95%] max-w-md bg-white border border-neutral-300">
      {children}
    </section>
  )
}

export default Card
