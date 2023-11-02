import { MouseEvent, ReactNode } from 'react'
import styles from './Button.module.scss'
import classNames from 'classnames'

type ButtonProps = {
  onClick?: (ev: MouseEvent) => void
  text?: string
  className?: string
  children?: ReactNode
  type: 'primary' | 'secondary' | 'tertiary' | 'primary2' | 'secondary2'
}

export const Button = ({ onClick, text, children, type }: ButtonProps) => {
  const buttonStyles = classNames({
    [styles.buttonPrimary]: type === 'primary',
    [styles.buttonSecondary]: type === 'secondary',
    [styles.buttonTertiary]: type === 'tertiary',
    [styles.buttonPrimary2]: type === 'primary2',
    [styles.buttonSecondary2]: type === 'secondary2',
  })

  return (
    <button onClick={onClick} className={buttonStyles}>
      {text}
      {children}
    </button>
  )
}
