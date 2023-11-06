import { useEffect, useState } from 'react'
import { useUser } from '@/features/user/useUser'
import { useNavigate, Link } from 'react-router-dom'
import styles from './SignPage.module.scss'
import { MAIN_PAGE, SIGN_UP } from '@/variables/routes'
import { AuthForm } from '@components/AuthForm/AuthForm'

export const SignInPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const changeInputEmail = (email: string) => setEmail(email)
  const changeInputPassword = (password: string) => setPassword(password)

  const { user, signInError, signIn } = useUser()

  const navigate = useNavigate()

  useEffect(() => {
    if (user.onSuccess) navigate(MAIN_PAGE)
    if (signInError) setError(signInError)
  }, [user, signInError, navigate])

  const handleSubmit = () => {
    const formData = {
      email: email,
      password: password,
    }

    signIn(formData)
  }

  return (
    <main className={styles.signPage}>
      <div className={styles.section}>
        <h1>Sign In</h1>
        <p className={styles.error}>{error}</p>
        <AuthForm
          valueEmail={email}
          onChangeEmail={changeInputEmail}
          valuePassword={password}
          onChangePassword={changeInputPassword}
          nameButton='Sign In'
          onClickButton={handleSubmit}
        />
        <p className={styles.link}>
          New to Canvas?
          <Link to={SIGN_UP}> Create an account</Link>
        </p>
      </div>
    </main>
  )
}
