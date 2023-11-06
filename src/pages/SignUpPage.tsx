import { useEffect, useState } from 'react'
import { useUser } from '@/features/user/useUser'
import { useNavigate } from 'react-router-dom'
import styles from './SignPage.module.scss'
import { MAIN_PAGE } from '@/variables/routes'
import { AuthForm } from '@components/AuthForm/AuthForm'

export const SignUpPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const changeInputEmail = (email: string) => setEmail(email)
  const changeInputPassword = (password: string) => setPassword(password)

  const { user, signUpError, signUpUser } = useUser()

  const navigate = useNavigate()

  useEffect(() => {
    if (user.onSuccess) navigate(MAIN_PAGE)
    if (signUpError) setError(signUpError)
  }, [user, signUpError, navigate])

  function handleSubmit() {
    const formData = {
      email: email,
      password: password,
    }

    signUpUser(formData)
  }

  return (
    <main className={styles.signPage}>
      <div className={styles.section}>
        <h1>Sign Up</h1>
        <p className={styles.error}>{error}</p>
        <AuthForm
          valueEmail={email}
          onChangeEmail={changeInputEmail}
          valuePassword={password}
          onChangePassword={changeInputPassword}
          nameButton='Sign Up'
          onClickButton={handleSubmit}
        />
      </div>
    </main>
  )
}
