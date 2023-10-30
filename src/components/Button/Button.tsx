import { MouseEvent, ReactNode } from 'react'
import styles from './Button.module.scss'
import classNames from 'classnames'

type ButtonProps = {
  onClick?: (ev: MouseEvent) => void
  text?: string
  className?: string
  children?: ReactNode
  type: 'primary' | 'secondary' | 'tertiary' | 'mainInfo' | 'mainPaint'
}

export const Button = ({ onClick, text, children, type }: ButtonProps) => {
  const buttonStyles = classNames({
    [styles.buttonPrimary]: type === 'primary',
    [styles.buttonSecondary]: type === 'secondary',
    [styles.buttonTertiary]: type === 'tertiary',
    [styles.buttonMainInfo]: type === 'mainInfo',
    [styles.buttonMainPaint]: type === 'mainPaint',
  })

  return (
    <button onClick={onClick} className={buttonStyles}>
      {text}
      {children}
    </button>
  )
}
