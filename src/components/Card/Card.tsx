import { PropsWithChildren } from 'react'

interface CardProps {
  className?: string;
}

function Card({ children, className = '' }: PropsWithChildren<CardProps>) {
  const desktopStyles = `md:p-6 md:pr-8 md:max-w-lg md:w-[50%] md:max-w-xl`
  const styles = `rounded m-5 p-2 pb-4 w-[95%] max-w-md bg-white border border-neutral-300 ${desktopStyles} ${className}`
  return <section className={styles}>{children}</section>
}

export default Card
