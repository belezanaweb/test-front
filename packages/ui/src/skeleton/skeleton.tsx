type Props = { className?: string; quantity?: number }

export function Skeleton({ className, quantity = 1 }: Props) {
  return (
    <>
      {Array.from({ length: quantity }).map((_, i) => {
        return (
          <div
            key={i}
            data-testid="skeleton"
            className={`w-full animate-pulse rounded-full bg-neutral-400 ${className}`}
          />
        )
      })}
    </>
  )
}
