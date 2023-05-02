import { PropsWithChildren } from 'react'

interface CardProps {
  className?: string;
}

function Card({ children, className = '' }: PropsWithChildren<CardProps>) {
  return (
    <section
      className={`rounded m-5 p-2 pb-4 w-[95%] max-w-md bg-white border border-neutral-300 ${className}`}
    >
      {children}
    </section>
  )
}

export default Card
