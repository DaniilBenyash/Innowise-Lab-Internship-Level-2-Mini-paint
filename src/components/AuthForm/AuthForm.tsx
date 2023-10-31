import { Input } from '@components/Input/Input'
import { Button } from '@components/Button/Button'
import { MouseEvent } from 'react'

type AuthFormProps = {
  valueEmail: string
  onChangeEmail: (value: string) => void
  valuePassword: string
  onChangePassword: (value: string) => void
  nameButton: string
  onClickButton: (ev: MouseEvent) => void
}

export const AuthForm = ({
  valueEmail,
  onChangeEmail,
  valuePassword,
  onChangePassword,
  nameButton,
  onClickButton,
}: AuthFormProps) => {
  return (
    <form action=''>
      <Input
        label='Email'
        placeholder='Your email'
        value={valueEmail}
        onChange={onChangeEmail}
        type='email'
        typeStyle='primary'
      />
      <Input
        label='Password'
        placeholder='Your password'
        value={valuePassword}
        onChange={onChangePassword}
        type='password'
        typeStyle='primary'
      />
      <Button text={nameButton} onClick={onClickButton} type='primary' />
    </form>
  )
}
