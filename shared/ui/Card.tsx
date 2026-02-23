import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type CardProps = {
  children: ReactNode
  className?: string
  hover?: boolean
}

export const Card = ({
  children,
  className,
  hover = false,
}: CardProps) => {
  return (
    <div
      className={twMerge(
        `
        rounded-2xl
        border border-black/5
        bg-white
        transition-all duration-300
        `,
        hover &&
          `
          hover:-translate-y-0.5
          hover:shadow-[0_5px_10px_rgba(0,0,0,0.06)]
          `,
        className
      )}
    >
      {children}
    </div>
  )
}