import { MouseEvent, ReactNode } from 'react'

type ButtonProps = {
  onClick?: (ev: MouseEvent) => void
  text?: string
  className?: string
  children?: ReactNode
}

export const Button = ({ onClick, text, className, children }: ButtonProps) => {
  return (
    <button onClick={onClick} className={className}>
      {text}
      {children}
    </button>
  )
}
