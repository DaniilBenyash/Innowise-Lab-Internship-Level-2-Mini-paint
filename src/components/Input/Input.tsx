import { ChangeEvent } from 'react';
import styles from './Input.module.scss';
import classNames from 'classnames';

type InputProps = {
  label?: string,
  placeholder?: string,
  onChange: (value: string) => any,
  value?: string,
  type?: string,
  min?:string,
  className?: string,
}

export const Input = ({ label, placeholder, onChange, value, type = 'input', min, className }: InputProps) => {
  const handleChangeInput = (ev: ChangeEvent<HTMLInputElement>) => onChange(ev.target.value);

  const labelStyle = classNames({[styles.input]: !className})
  
  const inputStyle = classNames(className, {
    [styles.input__form]: !className
  })
  return (
    <label className={labelStyle}>
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
  );
};
