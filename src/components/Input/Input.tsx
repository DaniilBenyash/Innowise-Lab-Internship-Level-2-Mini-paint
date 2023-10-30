import { ChangeEvent } from 'react'
import styles from './Input.module.scss'
import classNames from 'classnames'

type InputProps = {
  label?: string
  placeholder?: string
  onChange: (value: string) => void
  value?: string
  type?: string
  min?: string
  className?: string
  typeStyle: 'primary' | 'secondary'
}

export const Input = ({
  label,
  placeholder,
  onChange,
  value,
  min,
  type = 'input',
  typeStyle,
}: InputProps) => {
  const handleChangeInput = (ev: ChangeEvent<HTMLInputElement>) => onChange(ev.target.value)

  const inputStyle = classNames({
    [styles.inputPrimary]: typeStyle === 'primary',
    [styles.inputSecondary]: typeStyle === 'secondary',
  })
  const formStyle = classNames({
    [styles.formPrimary]: typeStyle === 'primary',
  })

  return (
    <label className={formStyle}>
      {label}
      <input
        type={type}
        className={inputStyle}
        placeholder={placeholder}
        value={value}
        onChange={handleChangeInput}
        min={min}
      />
    </label>
  )
}
