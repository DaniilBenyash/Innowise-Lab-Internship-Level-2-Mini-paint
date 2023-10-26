import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import { MouseEvent } from 'react';
import styles from './AuthForm.module.scss'

type AuthFormProps = {
  valueEmail: string,
  onChangeEmail: (value: string) => any,
  valuePassword: string,
  onChangePassword: (value: string) => any,
  nameButton: string,
  onClickButton: (ev: MouseEvent) => any
}

export const AuthForm = ({
  valueEmail,
  onChangeEmail,
  valuePassword,
  onChangePassword,
  nameButton,
  onClickButton
}: AuthFormProps) => {
  return (
    <form action="">
      <Input
        label="Email"
        placeholder="Your email"
        value={valueEmail}
        onChange={onChangeEmail}
        type="email"
      />
      <Input
        label="Password"
        placeholder="Your password"
        value={valuePassword}
        onChange={onChangePassword}
        type="password"
      />
      <Button text={nameButton} onClick={onClickButton} className={styles.authForm__button} />
    </form>
  );
};
