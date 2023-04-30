import { PropsWithChildren } from 'react'

function Card({ children }: PropsWithChildren) {
  return (
    <section className="rounded m-3 m-5 px-2 pt-5 pb-7 w-11/12 max-w-md bg-white border border-neutral-300">
      {children}
    </section>
  )
}

export default Card
